import React from 'react';
import "../FilmsDubbingStyle.css";
const HotelTransylvania1Page = () => {
    return (
        <div className="film-page"
        style={{
            backgroundImage: `url("https://images7.alphacoders.com/334/334823.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
        }}>
            <div className="film-details">
                <img
                    src=""
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
                    src="https://vidmoly.to/embed-8xjvn27ouj9i.html"
                    title="Hotel Transylvania"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HotelTransylvania1Page;
