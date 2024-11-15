import React from 'react';

const HomePage = () => {
    return (
        <div className="film-page">
            <h2>Home</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/5/58/Home_%282015_film%29_poster.jpg"
                    alt="Home"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2015</p>
                    <p><strong>Genre:</strong> Animation, Comedy</p>
                    <p>
                        <strong>Description:</strong> A hilarious and heartwarming story about an alien named Oh and his adventures on Earth.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Home"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HomePage;
