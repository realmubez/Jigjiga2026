export interface ContentSection {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  imageAlt?: string;
}

export interface ContentCard {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  tag?: string;
  icon?: string;
  href: string;
}

export interface ContentGroup {
  id: string;
  label: string;
  items: ContentCard[];
}

export interface PageContent {
  heroImageUrl?: string;
  pullQuote?: string;
  sections?: ContentSection[];
  groups?: ContentGroup[];
}

function pageKey(pageId: string): string {
  return `jjg_pg_${pageId.replace(/\//g, "__")}`;
}

export function getPageOverrides(pageId: string): PageContent {
  try {
    const stored = localStorage.getItem(pageKey(pageId));
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setPageOverrides(pageId: string, content: PageContent): void {
  localStorage.setItem(pageKey(pageId), JSON.stringify(content));
}

export function resetPageOverrides(pageId: string): void {
  localStorage.removeItem(pageKey(pageId));
}
