import React from 'react';
import { useParams } from 'react-router-dom';
import filmsData from './filmsData';
import "./FilmsDubbingStyle.css";

const AllFilms = () => {
    const { id } = useParams(); 
    const film = filmsData.find(f => f.link === `/dubbing/${id}`);

    if (!film) {
        return <div>Film not found!</div>;
    }

    return (
        <div>
            <div
                className="film-background"
                style={{ backgroundImage: `url(${film.photo_background})` }}
            ></div>
            <div className="film-page">
                <h2>{film.title}</h2>
                <div className="film-details">
                    <img
                        className="film-poster"
                        src={film.poster_path}
                        alt={film.title}
                    />
                    <div className="film-info">
                        <p>
                            <strong>Description:</strong> {film.description}
                        </p>
                        <p>
                            <strong>Genre:</strong> {film.genre}
                        </p>
                        <p>
                            <strong>Release Date:</strong> {film.release_date}
                        </p>
                    </div>
                </div>
                <div className="film-player">
                    <iframe
                        className="film-iframe"
                        src={film.iframe_link}
                        title={film.title}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AllFilms;
