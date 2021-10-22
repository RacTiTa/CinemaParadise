import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const MoviesServices = {
  getMovies: () =>
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
`
      )
      .then((response) => response.data.results),
  searchMovies: (input) =>
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}}&page=1&include_adult=false`
      )
      .then((response) => response.data.results),
};

export default MoviesServices;
