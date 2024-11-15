import React from 'react';

const OlafFrozenAdventurePage = () => {
    return (
        <div className="film-page">
            <h2>Olaf's Frozen Adventure</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/7/7b/Olaf%27s_Frozen_Adventure_poster.jpg"
                    alt="Olaf's Frozen Adventure"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2017</p>
                    <p><strong>Genre:</strong> Animation, Adventure, Family</p>
                    <p>
                        <strong>Description:</strong> Olaf teams up with Sven on a merry mission to bring home the best traditions and save Christmas for Anna and Elsa.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Olaf's Frozen Adventure"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default OlafFrozenAdventurePage;
