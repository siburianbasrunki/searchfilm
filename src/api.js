import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;
const baseurl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apikey}`);
  return movie.data.results;
};

export const searchMovie = async (a) => {
  const search = await axios.get(
    `${baseurl}/search/movie?query=${a}&page=1&api_key=${apikey}`
  );
  return search.data;
};
