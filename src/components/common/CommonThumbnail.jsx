import { useState } from "react";
import { useLazyImage } from "@/hooks/useLazyImage";
import { FALLBACK_IMG } from "@constants/tmdb";

export function CommonThumbnail({
  src: dataSrc,
  alt,
  width,
  height,
  className = "",
  skeletonClassName = "",
  objectFit = "object-cover",
}) {
  const [loaded, setLoaded] = useState(false);
  const { imgRef, src, onError } = useLazyImage();

  return (
    <div
      className={`relative overflow-hidden rounded bg-gray-300 dark:bg-[#1E2024] ${width ? `w-[${width}]` : ""} ${height ? `h-[${height}]` : ""} ${className} `}
    >
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gray-400 dark:bg-[#1E2024] ${skeletonClassName} `}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        data-src={dataSrc}
        alt={alt}
        onError={(e) => {
          e.target.src = FALLBACK_IMG;
          onError();
        }}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full ${objectFit} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} `}
      />
    </div>
  );
}
