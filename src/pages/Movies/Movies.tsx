import { useEffect, useState } from "react";
import MoviePagination from "./MoviePagination";
import { Spinner } from "@/components/ui/spinner";
import MovieTable from "./MovieTable";
import {
  fetchMovieCount,
  fetchMovieList,
  fetchMovieListSearch,
} from "@/lib/movie";
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
  const [displayedMovies, setDisplayedMovies] = useState<MovieType[]>([]);
  const [totalMovieCount, setTotalMovieCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isMovieFetchLoading, setIsMovieFetchLoading] = useState(true);
  const [initialPageLoad, setInitialPageLoad] = useState(true);
  const [moviePerPage, setMoviePerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(0);

  const isMovieListLoading = isMovieFetchLoading;

  const handleButtonDisabledState = (button: buttonType) => {
    let buttonState = false;

    if (button === buttonType.prev) {
      buttonState = pageNumber === 0 ? true : false;
    }

    if (button === buttonType.next) {
      buttonState = (pageNumber + 1) * moviePerPage >= totalMovieCount;
    }

    return buttonState;
  };

  const handleHidePagination = () => totalMovieCount < moviePerPage;

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
        const [fetchedMovies, count] = await Promise.all([
          fetchMovieList(moviePerPage, pageNumber),
          fetchMovieCount(),
        ]);

        setDisplayedMovies(fetchedMovies.movies);
        setTotalMovieCount(count);
        setInitialPageLoad(false);
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
  }, [pageNumber, moviePerPage, searchValue]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>

      <MovieSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        movieResults={totalMovieCount}
        disabled={initialPageLoad}
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
