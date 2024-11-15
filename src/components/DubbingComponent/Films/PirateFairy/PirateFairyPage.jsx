import React from 'react';

const PirateFairyPage = () => {
    return (
        <div className="film-page">
            <h2>Pirate Fairy</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/6/6d/The_Pirate_Fairy_poster.jpg"
                    alt="Pirate Fairy"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2014</p>
                    <p><strong>Genre:</strong> Animation, Adventure</p>
                    <p>
                        <strong>Description:</strong> A magical fairy adventure featuring daring escapades and heartfelt friendship.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Pirate Fairy"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default PirateFairyPage;
