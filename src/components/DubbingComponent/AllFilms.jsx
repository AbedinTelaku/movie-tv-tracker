import React from 'react';
import { useParams } from 'react-router-dom';
import filmsData from './filmsData';

const FilmPage = () => {
    const { id } = useParams(); // Merr ID nga URL-ja
    const film = filmsData.find((film) => film.id === parseInt(id)); // Gjej filmin me ID

    if (!film) {
        return <div>Film not found</div>; // Kontroll nëse ID nuk ekziston
    }

    return (
        <div className="film-page">
            <h2>{film.title}</h2>
            <div className="film-details">
                <img src={film.poster_path} alt={film.title} className="film-poster" />
                <div className="film-info">
                    <p><strong>Release Date:</strong> {film.release_date}</p>
                    <p><strong>Genre:</strong> {film.genre}</p>
                    <p><strong>Description:</strong> {film.description}</p>
                </div>
            </div>
            <div className="film-player">
                <iframe
                    src={film.iframe_link}
                    title={film.title}
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default FilmPage;
