import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import MoviePagination from "./MoviePagination";
import { Spinner } from "@/components/ui/spinner";
import MovieTable from "./MovieTable";
import { fetchMovieList, fetchMovieListSearch } from "@/lib/movie";
import MovieSearch from "./MovieSearch";

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
  const [totalMovieCount, setTotalMovieCount] = useState(movieCount);
  const [searchValue, setSearchValue] = useState("");
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

  const handleHidePagination = () => {
    const searchValueLength = searchValue.length > 0;

    return searchValueLength
      ? totalMovieCount < moviePerPage
      : movieCount < moviePerPage;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setIsMovieFetchLoading(true);

      if (searchValue.length > 0) {
        const fetchedMovies = await fetchMovieListSearch(
          searchValue,
          moviePerPage,
          pageNumber,
        );

        setDisplayedMovies(fetchedMovies.movies);
        setTotalMovieCount(fetchedMovies.count);
      } else {
        const fetchedMovies = await fetchMovieList(moviePerPage, pageNumber);
        setDisplayedMovies(fetchedMovies.movies);
        setTotalMovieCount(movieCount);
      }
      setIsMovieFetchLoading(false);
    };

    if (searchValue.length > 0) {
      const timer = setTimeout(fetchAPI, 750);
      return () => {
        clearTimeout(timer);
      };
    }

    void fetchAPI();
  }, [pageNumber, moviePerPage, searchValue, movieCount]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>

      <MovieSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        movieResults={totalMovieCount}
      />

      {isMovieListLoading ? (
        <Spinner className="size-10 mt-5" />
      ) : (
        <MovieTable movies={displayedMovies} />
      )}

      <MoviePagination
        hidePagination={handleHidePagination()}
        setMoviePerPage={setMoviePerPage}
        setPageNumber={setPageNumber}
        prevButtonDisabled={handleButtonDisabledState(buttonType.prev)}
        nextButtonDisabled={handleButtonDisabledState(buttonType.next)}
      />
    </div>
  );
};

export default Movies;
