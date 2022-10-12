import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // NOTE: the Fetch API doesn't treat error status codes as real errors. It will not throw a technical error if we get back an error status code. We would only get an error in a second step if we then try to operate on data, which we haven't gotten.
    // NOTE: Axios, third-party library, which you could use for sending requests, would generate and throw a real error for error status codes.
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      // NOTE: Response has a ok method, which basically signals whether the response was successful or not.
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    // NOTE: These state updating functions as you learned don't need to be added as dependencies because react guarantees that they will never change.
  }, []);

  // NOTE: This fetchMovieHandler could change if we use external state here, but not this case. And it brings an problem because this fetchMovieHandler is an function which is an object and therefore this function will technically change whenever this component re-renders. So, we will create an infinite loop if we add it as a dependency. The better solution is to use useCallback hook.

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
