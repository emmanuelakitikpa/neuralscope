import type { APIRoute } from 'astro';
import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { pages, languages, type Lang } from '../i18n/ui';

const keys: (string | undefined)[] = [undefined, ...pages.map((p) => p.key)];
const slug = (lang: Lang, key?: string) => (key ? pages.find((p) => p.key === key)![lang] : '');
const loc = (lang: Lang, key?: string) => getAbsoluteLocaleUrl(lang, slug(lang, key));

export const GET: APIRoute = () => {
  const urls = languages.flatMap((lang) =>
    keys.map((key) => {
      const alternates = languages
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${loc(l, key)}" />`)
        .join('\n');
      return `  <url>\n    <loc>${loc(lang, key)}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc('en', key)}" />\n  </url>`;
    })
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};