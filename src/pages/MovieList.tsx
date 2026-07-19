import { Spinner } from "@/components/ui/spinner";
import { useLoaderData, useNavigation } from "react-router";

export type MovieType = {
  movie_id: number;
  movie_title: string;
  movie_year: number;
  movie_category: string;
  movie_watched: boolean;
  search_title?: string;
};

const MovieList = () => {
  const allMovies = useLoaderData() as MovieType[];
  const displayedMovies = allMovies;

  const navigation = useNavigation();
  const isMovieListLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>
      {isMovieListLoading ? (
        <Spinner className="size-10 mt-5" />
      ) : (
        <MovieTable movies={displayedMovies} />
      )}
    </div>
  );
};

const MovieTable = ({ movies }: { movies: MovieType[] }) => {
  return (
    <table>
      <tbody>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <tr key={movie.movie_id}>
              <td>{movie.movie_title}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No movies found!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MovieList;
