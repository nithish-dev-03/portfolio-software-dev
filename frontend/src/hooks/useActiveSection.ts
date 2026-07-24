import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Check if we are at the very bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return active;
}
