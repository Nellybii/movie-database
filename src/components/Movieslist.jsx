import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("BASE_URL")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setMovies(res.results))
      //.catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(); 
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
