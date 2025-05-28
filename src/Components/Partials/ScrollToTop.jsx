import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Scrolls the window to the top when the route changes or hash changes
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element with that id
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Otherwise, scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash, key]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
