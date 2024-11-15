import React from 'react';

const ScoobyDooMonsterMexicoPage = () => {
    return (
        <div className="film-page">
            <h2>Scooby-Doo! and the Monster of Mexico</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/9/9e/Scooby-Doo_and_the_Monster_of_Mexico.jpg"
                    alt="Scooby-Doo! and the Monster of Mexico"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2003</p>
                    <p><strong>Genre:</strong> Animation, Mystery, Adventure</p>
                    <p>
                        <strong>Description:</strong> Scooby-Doo and friends tackle a spooky mystery in Mexico involving the legendary monster El Chupacabra.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Scooby-Doo! and the Monster of Mexico"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ScoobyDooMonsterMexicoPage;
