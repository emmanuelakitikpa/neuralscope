import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('articles', ({ data }) => 
    data.lang === 'fr' && !data.draft
  )).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const site = 'https://emmanuelakitikpa.github.io';
  const base = '/neuralscope';
  const buildUrl = (slug: string) => `${site}${base}/fr/articles/${slug}/`;

  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${buildUrl(post.data.slug)}</link>
      <guid>${buildUrl(post.data.slug)}</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      ${post.data.author ? `<author><![CDATA[${post.data.author}]]></author>` : ''}
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NeuralScope — Guides &amp; Actualités IA</title>
    <link>${site}${base}/fr/articles/</link>
    <description>Comprendre l'IA. Mieux choisir. Travailler plus intelligemment.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site}${base}/fr/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};