import type { MovieType } from "@/pages/Movies/Movies";

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

const FETCH_SEARCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies/search"
    : "api/movies/search";

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
): Promise<{ movies: MovieType[] }> {
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

  return { movies };
}

/**
 * Fetches the total movie count from the database
 */
async function fetchMovieCount(): Promise<number> {
  const response = await fetch(FETCH_COUNT_URL, { method: "GET" });
  const data = await response.json();

  return data.body;
}

export async function fetchMovieListSearch(
  search: string,
  limit: number,
  page: number,
): Promise<{ movies: MovieType[]; count: number }> {
  const params = new URLSearchParams({
    movie: search,
    limit: String(limit),
    offset: String(page * limit),
  });

  const response = await fetch(`${FETCH_SEARCH_URL}?${params}`, {
    method: "GET",
  });

  console.log(response);

  const data = await response.json();
  const movies = data.body.rows.map((row: string[]) =>
    Object.fromEntries(
      data.body.columns.map((col: string, idx: number) => [col, row[idx]]),
    ),
  );

  return { movies, count: Number(data.body.count) };
}
