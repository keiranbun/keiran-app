import type { MovieType } from "@/pages/Movies/Movies";
import { toSearchFormat } from "./utils";

export const DEFAULT_MOVIE_LIMIT = 25;
export const DEFAULT_MOVIE_OFFSET = 0;

const FETCH_LIST_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies"
    : "api/movies";

const FETCH_COUNT_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies/count"
    : "api/movies/count";

export async function moviePageLoader() {
  const [movies, movieCount] = await Promise.all([
    fetchMovieList(DEFAULT_MOVIE_LIMIT, DEFAULT_MOVIE_OFFSET),
    fetchMovieCount(),
  ]);

  return { movies, movieCount };
}

/**
 * Fetches a list of movies from the database
 */
export async function fetchMovieList(
  limit: number,
  page: number,
): Promise<MovieType[]> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(page * limit),
  });
  const response = await fetch(`${FETCH_LIST_URL}?${params}`, {
    method: "GET",
  });
  const data = await response.json();
  const movies = data.body.rows.map((row: string[]) =>
    Object.fromEntries(
      data.body.columns.map((col: string, idx: number) => [col, row[idx]]),
    ),
  );
  movies.map((movie: MovieType) => ({
    ...movie,
    search_title: toSearchFormat(movie.movie_title),
  }));

  return movies;
}

/**
 * Fetches the total movie count from the database
 */
async function fetchMovieCount(): Promise<number> {
  const response = await fetch(FETCH_COUNT_URL, { method: "GET" });
  const data = await response.json();

  return data.body;
}
