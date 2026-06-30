import { useEffect } from "react";

const SITE_URL = "https://theneurohaven.com";

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function usePageMetadata(
  title: string,
  description: string,
  path: string
) {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:url"]', url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [description, path, title]);
}
