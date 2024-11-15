import React from 'react';

const HotelTransylvania1Page = () => {
    return (
        <div className="film-page">
            <h2>Hotel Transylvania</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f8/Hotel_Transylvania_%282012%29_poster.jpg"
                    alt="Hotel Transylvania"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2012</p>
                    <p><strong>Genre:</strong> Animation, Comedy, Family</p>
                    <p>
                        <strong>Description:</strong> Dracula runs a high-end resort for monsters and encounters unexpected challenges when a human stumbles upon his hotel.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Hotel Transylvania"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HotelTransylvania1Page;
