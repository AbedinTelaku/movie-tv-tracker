import React from 'react';

const DragonsDesirePage = () => {
    return (
        <div className="film-page">
            <h2>Dragon's Desire</h2>
            <div className="film-details">
                <img
                    src="https://example.com/dragons-desire-poster.jpg"
                    alt="Dragon's Desire"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2020</p>
                    <p><strong>Genre:</strong> Fantasy, Action</p>
                    <p>
                        <strong>Description:</strong> A breathtaking tale of adventure and the bond between a hero and a mystical dragon.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Dragon's Desire"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default DragonsDesirePage;
