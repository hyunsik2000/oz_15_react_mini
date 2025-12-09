import { FALLBACK_IMG } from "@/constants/tmdb";
import { useEffect, useRef, useState } from "react";

export function useLazyImage() {
  const imgRef = useRef(null);
  const [src, setSrc] = useState();

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazySrc = node.dataset.src;
            if (lazySrc) setSrc(lazySrc);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const onError = () => {
    setSrc(FALLBACK_IMG);
  };

  return { imgRef, src, onError };
}
