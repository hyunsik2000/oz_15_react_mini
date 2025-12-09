import { useState } from "react";
import { FALLBACK_IMG, TMDB_IMAGE_BASE_URL } from "@constants/tmdb";
import { useLazyImage } from "@/hooks/useLazyImage";

export function SearchThumbnail({ backdropPath, title }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { imgRef, src, onError } = useLazyImage();

  const loadImgSrc = `${TMDB_IMAGE_BASE_URL}${backdropPath}`;

  return (
    <div className="h-[180px] shrink-0 overflow-hidden rounded bg-gray-500 dark:bg-[#1E2024]">
      {!isLoaded && (
        <div className="animate-pulse bg-gray-500 dark:bg-[#1E2024]" />
      )}
      <img
        ref={imgRef}
        src={src}
        data-src={loadImgSrc}
        alt={title}
        onError={onError}
        className={`h-full w-[320px] object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
