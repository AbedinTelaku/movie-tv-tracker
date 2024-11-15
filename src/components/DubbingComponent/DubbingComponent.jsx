import React from 'react';
import { Link } from 'react-router-dom';
import './DubbingStyle.css';

const DubbingComponent = () => {
    const dubbingFilms = [
        {
            id: 1,
            title: 'Home Alone 2',
            release_date: '2000',
            poster_path: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrdsA4OHZftYGLKuVIFKmOdzZFyIJSrbsZ840-9QyXPB7vbecW00RVM0jd6vhb3VAwwC8X',
            link: '/home-alone'
        },
        {
            id: 2,
            title: 'Moana',
            release_date: '2016',
            poster_path: 'https://lumiere-a.akamaihd.net/v1/images/eu_moana-movie_hero_m_006c78bd.jpeg',
            link: '/moana'
        }
    ];

    return (
        <div className="dubbing-container">
            <h2>Dubbing Films</h2>
            <div className="films-list">
                {dubbingFilms.map((film) => (
                    <div className="film-card" key={film.id}>
                        <Link to={film.link}>
                            <img
                                src={film.poster_path}
                                alt={film.title}
                            />
                            <div className="film-info">
                                <h3>{film.title}</h3>
                                <p>{film.release_date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DubbingComponent;
