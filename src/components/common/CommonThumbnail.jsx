import { useState } from "react";
import { useLazyImage } from "@/hooks/useLazyImage";
import { FALLBACK_IMG } from "@constants/tmdb";

export function CommonThumbnail({
  src: dataSrc,
  alt,
  width,
  height,
  propsClass = "",
  objectFit = "object-cover",
}) {
  const [loaded, setLoaded] = useState(false);
  const { imgRef, src, onError } = useLazyImage();

  return (
    <div
      className={`rounded bg-gray-300 dark:bg-[#1E2024] ${width ? `w-[${width}]` : ""} ${height ? `h-[${height}]` : ""} ${propsClass} `}
    >
      <img
        ref={imgRef}
        src={src}
        data-src={dataSrc}
        alt={alt}
        onError={(e) => {
          e.currentTarget.src = FALLBACK_IMG;
          onError();
        }}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full ${objectFit} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
