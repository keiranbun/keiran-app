import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import MoviePagination from "./MoviePagination";
import { Spinner } from "@/components/ui/spinner";
import MovieTable from "./MovieTable";
import { fetchMovieList } from "@/lib/movie";

export type MovieType = {
  movie_id: number;
  movie_title: string;
  movie_year: number;
  movie_category: string;
  movie_watched: boolean;
  search_title?: string;
};

enum buttonType {
  prev,
  next,
}

const Movies = () => {
  const { movies, movieCount } = useLoaderData() as {
    movies: MovieType[];
    movieCount: number;
  };

  const [displayedMovies, setDisplayedMovies] = useState<MovieType[]>(movies);
  const [isMovieFetchLoading, setIsMovieFetchLoading] = useState(false);

  const navigation = useNavigation();
  const isMovieListLoading =
    navigation.state === "loading" || isMovieFetchLoading;

  const [moviePerPage, setMoviePerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(0);

  const handleButtonDisabledState = (button: buttonType) => {
    let buttonState = false;

    if (button === buttonType.prev) {
      buttonState = pageNumber === 0 ? true : false;
    }

    if (button === buttonType.next) {
      buttonState = pageNumber * moviePerPage >= movieCount ? true : false;
    }

    return buttonState;
  };

  useEffect(() => {
    const run = async () => {
      setIsMovieFetchLoading(true);
      const fetchedMovies = await fetchMovieList(moviePerPage, pageNumber);
      setIsMovieFetchLoading(false);
      setDisplayedMovies(fetchedMovies);
    };
    void run();
  }, [pageNumber, moviePerPage]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>
      <MoviePagination
        setMoviePerPage={setMoviePerPage}
        setPageNumber={setPageNumber}
        prevButtonDisabled={handleButtonDisabledState(buttonType.prev)}
        nextButtonDisabled={handleButtonDisabledState(buttonType.next)}
      />

      {isMovieListLoading ? (
        <Spinner className="size-10 mt-5" />
      ) : (
        <MovieTable movies={displayedMovies} />
      )}
    </div>
  );
};

export default Movies;
