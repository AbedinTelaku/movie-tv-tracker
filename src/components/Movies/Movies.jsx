import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesStyle.css';
import moviesData from './moviesData';

const Movies = () => {
  return (
    <div className="movies-container">
      {moviesData.map(movie => (
        <div key={movie.id} className="movie-card">
          <Link to={movie.link}>
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
