import type { MovieType } from "./Movies";

type MovieTableType = {
  movies: MovieType[];
};

const MovieTable = ({ movies }: MovieTableType) => {
  return (
    <table>
      <tbody>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <tr
              key={movie.movie_id}
              className="hover:text-primary hover:cursor-default"
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
  );
};

export default MovieTable;
