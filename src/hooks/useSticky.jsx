import { useState, useEffect, useRef } from "react";

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

function useSticky() {
    const [isSticky, setSticky] = useState(false);
    const element = useRef(null);

    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);
      setSticky(window.scrollY > 100); // Un seuil arbitraire pour tester
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    return { isSticky, element };
}

export default useSticky;