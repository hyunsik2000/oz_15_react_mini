import { useState } from "react";
import { TMDB_IMAGE_BASE_URL } from "@constants/tmdb";

const fallbackImg =
  "https://designcompass.org/wp-content/uploads/2024/12/logo-netflix.png";

export function SearchThumbnail({ backdropPath, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImgSrc = backdropPath
    ? `${TMDB_IMAGE_BASE_URL}${backdropPath}`
    : fallbackImg;

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
