import React, { useEffect, useState, useMemo } from 'react';
import './FilmStyle.css';

const FilmsComponent = ({ searchTerm }) => {
    const [films, setFilms] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => setFilms(data.results))
            .catch(error => console.error('Error fetching films:', error));
    }, []);

    const filteredFilms = useMemo(
        () =>
            films.filter((film) =>
                film.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
            ),
        [searchTerm, films]
    );

    return (
        <div className="films-container">
            <h2>Popular Films</h2>
            <div className="films-list">
                {filteredFilms.map((film) => (
                    <div className="film-card" key={film.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                            alt={film.title}
                        />
                        <div className="film-info">
                            <h3>{film.title}</h3>
                            <p>
                                {film.release_date} <span className="dot">•</span>{" "}
                                <span className="genre">Genre</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilmsComponent;
