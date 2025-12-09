import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import { fetchMovies } from "@/utils/fetchMovies";
import { useState } from "react";
import { TMDB_API_BASE_URL } from "@constants/tmdb";

export function MovieList() {
  const navigate = useNavigate();
  const url = `${TMDB_API_BASE_URL}/movie/popular?language=ko-KR&page=1`;

  const { data } = fetchMovies(url);
  const [movies] = useState(() =>
    data.results.filter((result) => result.adult === false),
  );

  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            movieItem={movie}
            onClick={() => navigate(`/details/${movie.id}`)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
