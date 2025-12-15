import { Suspense } from "react";
import { ErrorFallback } from "@components/common/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { MovieList } from "@components/MovieList/MovieList";
import { MovieListSkeleton } from "@components/MovieList/MovieListSkeleton";
import { MOVIE_SECTIONS } from "@/constants/movieSections";

function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<MovieListSkeleton />}>
        <section className="flex flex-col gap-16">
          {MOVIE_SECTIONS.map(({ title, url }) => (
            <div key={title}>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <MovieList url={url} />
            </div>
          ))}
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Home;
