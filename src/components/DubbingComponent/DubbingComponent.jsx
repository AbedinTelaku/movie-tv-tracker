import React from 'react';
import { Link } from 'react-router-dom';
import './DubbingStyle.css';
import filmsData from './filmsData';

const DubbingComponent = () => {
    return (
        <div className="dubbing-container">
            {filmsData.map(film => (
                <div key={film.id} className="film-card">
                    <Link to={film.link}>
                        <img src={film.poster_path} alt={film.title} />
                        <h3>{film.title}</h3>
                        <p>{film.release_date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DubbingComponent;
