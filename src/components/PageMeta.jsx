import { useEffect } from 'react';

const SITE_NAME = "Queen's Own Yeomanry";

const setMeta = (selector, attr, value, create) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
};

/**
 * Sets the document title and description per route. Without this every page
 * shares one title, so tabs, bookmarks and search results are indistinguishable.
 */
const PageMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME;

    if (description) {
      setMeta('meta[name="description"]', 'content', description, () => {
        const el = document.createElement('meta');
        el.setAttribute('name', 'description');
        return el;
      });
      setMeta('meta[property="og:description"]', 'content', description, () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:description');
        return el;
      });
    }

    setMeta('meta[property="og:title"]', 'content', document.title, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:title');
      return el;
    });
  }, [title, description]);

  return null;
};

export default PageMeta;
