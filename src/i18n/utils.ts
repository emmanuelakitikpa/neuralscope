import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from 'astro:i18n';
import { pages, type Lang } from './ui';

const slug = (lang: Lang, key?: string) =>
  key ? (pages.find((p) => p.key === key)?.[lang] ?? '') : '';

export const pageUrl = (lang: Lang, key?: string) => getRelativeLocaleUrl(lang, slug(lang, key));
export const pageAbs = (lang: Lang, key?: string) => getAbsoluteLocaleUrl(lang, slug(lang, key));