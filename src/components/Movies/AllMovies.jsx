import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './moviesData';
import './MovieDetailsStyle.css';

const AllMovies = () => {
    const { id } = useParams();
    const movie = moviesData.find(m => m.link === `/movies/${id}`);

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div>
            <div
                className="movie-background"
                style={{ backgroundImage: `url(${movie.photo_background})` }}
            ></div>
            <div className="movie-page">
                <h2>{movie.title}</h2>
                <div className="movie-details">
                    <img
                        className="movie-poster"
                        src={movie.poster_path}
                        alt={movie.title}
                    />
                    <div className="movie-info">
                        <p>
                            <strong>Description:</strong> {movie.description}
                        </p>
                        <p>
                            <strong>Genre:</strong> {movie.genre}
                        </p>
                        <p>
                            <strong>Release Date:</strong> {movie.release_date}
                        </p>
                    </div>
                </div>
                <div className="movie-player">
                    <iframe
                        className="movie-iframe"
                        src={movie.iframe_link}
                        title={movie.title}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AllMovies;
