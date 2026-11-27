import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { pages, languages, type Lang } from '../i18n/ui';

const keys: (string | undefined)[] = [undefined, ...pages.map((p) => p.key)];
const slug = (lang: Lang, key?: string) => (key ? pages.find((p) => p.key === key)![lang] : '');
const loc = (lang: Lang, key?: string) => getAbsoluteLocaleUrl(lang, slug(lang, key));

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  alternates: { lang: Lang | 'x-default'; href: string }[];
}

export const GET: APIRoute = async () => {
  const entries: SitemapEntry[] = [];

  // ---- Pages fixes (EN/FR) ----
  for (const lang of languages) {
    for (const key of keys) {
      const alternates = languages.map((l) => ({ lang: l, href: loc(l, key) }));
      alternates.push({ lang: 'x-default', href: loc('en', key) });
      entries.push({ loc: loc(lang, key), alternates });
    }
  }

  // ---- Articles (EN/FR) ----
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const byTranslation = new Map<string, typeof articles>();
  for (const a of articles) {
    const list = byTranslation.get(a.data.translationKey) ?? [];
    list.push(a);
    byTranslation.set(a.data.translationKey, list);
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const site = 'https://emmanuelakitikpa.github.io';
  const articleUrl = (a: (typeof articles)[number]) =>
    `${site}${base}/${a.data.lang}/articles/${a.data.slug}/`;

  for (const a of articles) {
    const siblings = byTranslation.get(a.data.translationKey) ?? [];
    const alternates: { lang: Lang | 'x-default'; href: string }[] = siblings.map((s) => ({
      lang: s.data.lang,
      href: articleUrl(s),
    }));
    const enSibling = siblings.find((s) => s.data.lang === 'en');
    if (enSibling) alternates.push({ lang: 'x-default', href: articleUrl(enSibling) });

    entries.push({
      loc: articleUrl(a),
      lastmod: (a.data.updatedDate ?? a.data.pubDate).toISOString(),
      alternates,
    });
  }

  const urls = entries.map((e) => {
    const links = e.alternates
      .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`)
      .join('\n');
    const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${e.loc}</loc>${lastmod}\n${links}\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};