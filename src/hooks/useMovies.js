import { useEffect, useState } from "react";
import MoviesServices from "../services/MoviesServices";

const useMovies = () => {
  const [suggestedMovies, setSuggestedMovies] = useState();
  const [voteAverageFilter, setVoteAverageFilter] = useState();

  const getMovies = () => {
    MoviesServices.getMovies().then((response) => setSuggestedMovies(response));
  };

  const searchMovie = (input) => {
    if (input === "") {
      getMovies();
    } else {
      MoviesServices.searchMovies(input).then((response) =>
        setSuggestedMovies(response)
      );
    }
  };

  const getMax = (star) => (star === 0 ? 10 : star * 2);

  const getMin = (star) => (star === 0 ? 0 : (star - 1) * 2);
  useEffect(() => getMovies(), []);

  return {
    suggestedMovies: voteAverageFilter
      ? suggestedMovies.filter(
          (movie) =>
            getMin(voteAverageFilter) <= movie.vote_average &&
            movie?.vote_average <= getMax(voteAverageFilter)
        )
      : suggestedMovies,
    searchMovie,
    setVoteAverageFilter,
  };
};

export default useMovies;
