'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [typeof window !== 'undefined' ? window.location.hash : '']);

  return null;
}
