import React from 'react';

const MiyazakisSpiritedAwayPage = () => {
    return (
        <div className="film-page">
            <h2>Miyazaki's Spirited Away</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.JPG"
                    alt="Miyazaki's Spirited Away"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2001</p>
                    <p><strong>Genre:</strong> Animation, Fantasy</p>
                    <p>
                        <strong>Description:</strong> A young girl wanders into a world ruled by gods, witches, and spirits, and must find her way back home.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Miyazaki's Spirited Away"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default MiyazakisSpiritedAwayPage;
