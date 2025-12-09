import { useLazyImage } from "@/hooks/useLazyImage";
import { TMDB_IMAGE_BASE_URL } from "@constants/tmdb";

export function MovieCard({ movieItem, onClick }) {
  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`;
  const { imgRef, src, onError } = useLazyImage();

  return (
    <article className="cursor-pointer" onClick={onClick}>
      <ul className="flex flex-col gap-2">
        <li>
          <div className="aspect-2/3 w-full">
            <img
              ref={imgRef}
              src={src}
              data-src={imgSrc}
              alt={movieItem.title}
              onError={onError}
              className="h-full object-cover"
            />
          </div>
        </li>
        <li className="w-full truncate font-medium">{movieItem.title}</li>
        <li className="text-sm dark:text-gray-300">
          {movieItem.vote_average.toFixed(1)}
        </li>
      </ul>
    </article>
  );
}
