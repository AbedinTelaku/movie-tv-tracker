import React from 'react';

const LeagueOfSuperpetsPage = () => {
    return (
        <div className="film-page">
            <h2>League of Superpets</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/3/3e/DC_League_of_Super-Pets_poster.jpg"
                    alt="League of Superpets"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2022</p>
                    <p><strong>Genre:</strong> Animation, Action, Comedy</p>
                    <p>
                        <strong>Description:</strong> Superman's dog and a team of super-powered pets must save the Justice League from a dangerous foe.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="League of Superpets"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default LeagueOfSuperpetsPage;
