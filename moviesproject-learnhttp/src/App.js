import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  
  const [moviesList, setMoviesList] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        const transformedMovies = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            release: movie.release_date,
            openingText: movie.opening_crawl
          };
        });
        setMoviesList(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesList} />
      </section>
    </React.Fragment>
  );
}

export default App;
