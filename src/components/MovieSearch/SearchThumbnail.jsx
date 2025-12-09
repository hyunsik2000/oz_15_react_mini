import { useState } from "react";
import { FALLBACK_IMG, TMDB_IMAGE_BASE_URL } from "@constants/tmdb";

export function SearchThumbnail({ backdropPath, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImgSrc = backdropPath
    ? `${TMDB_IMAGE_BASE_URL}${backdropPath}`
    : FALLBACK_IMG;

  return (
    <div className="h-[180px] shrink-0 overflow-hidden rounded bg-gray-500 dark:bg-[#1E2024]">
      {!isLoaded && (
        <div className="animate-pulse bg-gray-500 dark:bg-[#1E2024]" />
      )}
      <img
        src={loadImgSrc}
        alt={title}
        className={`h-full w-[320px] object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
