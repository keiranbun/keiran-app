import type { MovieType } from "@/pages/MovieList";
import { toSearchFormat } from "./utils";

const FETCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies"
    : "api/movies";

export async function movieLoader(): Promise<MovieType[]> {
  const response = await fetch(FETCH_URL, { method: "GET" });
  const data = await response.json();
  const movies = data.body.rows.map((row: string[]) =>
    Object.fromEntries(
      data.body.columns.map((col: string, idx: number) => [col, row[idx]])
    )
  );
  movies.map((movie: MovieType) => ({
    ...movie,
    search_title: toSearchFormat(movie.movie_title),
  }));

  return movies;
}
