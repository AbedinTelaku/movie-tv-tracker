import React, { useEffect, useState } from 'react';

const FilmsComponent = () => {
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

    return (
        <div>
            <h2>Popular Films</h2>
            <ul>
                {films.map(film => (
                    <li key={film.id}>{film.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilmsComponent;
