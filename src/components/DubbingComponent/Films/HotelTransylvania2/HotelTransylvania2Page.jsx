import React from 'react';

const HotelTransylvania2Page = () => {
    return (
        <div className="film-page">
            <h2>Hotel Transylvania 2</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/7/70/Hotel_Transylvania_2_poster.jpg"
                    alt="Hotel Transylvania 2"
                    className="film-poster"
                />
                <h2>Hotel Translylvania 2</h2> 
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2015</p>
                    <p><strong>Genre:</strong> Animation, Comedy, Family</p>
                    <p>
                        <strong>Description:</strong> Dracula and his friends try to bring out the monster in his half-human, half-vampire grandson.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Hotel Transylvania 2"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HotelTransylvania2Page;
