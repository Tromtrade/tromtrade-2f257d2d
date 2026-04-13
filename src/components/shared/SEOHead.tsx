import { useEffect } from "react";
import type { PageMeta } from "@/config/seo";

interface Props {
  meta: PageMeta;
}

/**
 * Sets document <title> and meta tags dynamically for SPA pages.
 * OG/Twitter base tags are in index.html; this overrides per-page.
 */
const SEOHead = ({ meta }: Props) => {
  useEffect(() => {
    document.title = meta.title;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', meta.description);
    setMeta('link[rel="canonical"]', meta.canonical);

    // Update canonical href (link, not meta)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", meta.canonical);

    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:url"]', meta.canonical);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);

    if (meta.ogImage) {
      setMeta('meta[property="og:image"]', meta.ogImage);
      setMeta('meta[name="twitter:image"]', meta.ogImage);
    }
  }, [meta]);

  return null;
};

export default SEOHead;
