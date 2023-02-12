import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
const App = () => {
  const [popularMovies, setPopularMovie] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date"> release :{movie.release_date} </div>
          <div className="Movie-rate">rating : {movie.vote_average} </div>
        </div>
      );
    });
  };

  const search = async (a) => {
    if (a.length > 3) {
      const query = await searchMovie(a);
      setPopularMovie(query.results);
    }
  };
  // console.log({ popularMovies: popularMovies });
  return (
    <div className="App">
      <header className="App-header">
        <h1>CARI FILM KESUKAAN ANDA</h1>

        <input
          type="text"
          placeholder="cari film"
          onChange={({ target }) => search(target.value)}
          className="Movie-search"
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
