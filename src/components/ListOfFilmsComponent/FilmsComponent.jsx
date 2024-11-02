import React, { useEffect, useState, useMemo } from 'react';
import './FilmStyle.css';

const FilmsComponent = ({ searchTerm }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/popular-movies')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setFilms(data))
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
