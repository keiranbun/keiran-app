import type { MovieType } from "./Movies";

type MovieTableType = {
  movies: MovieType[];
};

const MovieTable = ({ movies }: MovieTableType) => {
  return (
    <div className="flex flex-row flex-wrap mx-10">
      <table>
        <tbody>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <tr
                key={movie.movie_id}
                className="hover:text-primary hover:cursor-default border-b border-opacity-10 h-8"
              >
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
    </div>
  );
};

export default MovieTable;
