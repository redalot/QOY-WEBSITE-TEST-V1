import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router keeps the window scroll position across navigations, which
// leaves you mid-page after following a link from far down a long page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
