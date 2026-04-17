import { useState, useEffect } from "react";
import { getPageOverrides, PageContent } from "@/lib/contentStore";

export function usePageContent<T extends PageContent>(pageId: string, defaults: T): T {
  const [content, setContent] = useState<T>(() => {
    const overrides = getPageOverrides(pageId);
    return mergeContent(defaults, overrides) as T;
  });

  useEffect(() => {
    const overrides = getPageOverrides(pageId);
    setContent(mergeContent(defaults, overrides) as T);
  }, [pageId]);

  return content;
}

function mergeContent<T extends PageContent>(defaults: T, overrides: PageContent): T {
  const result = { ...defaults };
  if (overrides.heroImageUrl) result.heroImageUrl = overrides.heroImageUrl;
  if (overrides.pullQuote) result.pullQuote = overrides.pullQuote;
  if (overrides.sections && overrides.sections.length > 0) {
    (result as any).sections = overrides.sections;
  }
  if (overrides.groups && overrides.groups.length > 0) {
    (result as any).groups = overrides.groups;
  }
  return result;
}
