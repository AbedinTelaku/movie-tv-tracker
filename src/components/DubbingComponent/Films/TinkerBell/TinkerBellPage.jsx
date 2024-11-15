import React from 'react';

const TinkerBellPage = () => {
    return (
        <div className="film-page">
            <h2>TinkerBell</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f9/Tinker_Bell_poster.jpg"
                    alt="TinkerBell"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2008</p>
                    <p><strong>Genre:</strong> Animation, Fantasy</p>
                    <p>
                        <strong>Description:</strong> The beloved fairy embarks on a journey to discover the true power of pixie dust.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="TinkerBell"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default TinkerBellPage;
