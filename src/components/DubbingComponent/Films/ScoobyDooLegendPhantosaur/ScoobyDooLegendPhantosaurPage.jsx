import React from 'react';

const ScoobyDooLegendPhantosaurPage = () => {
    return (
        <div className="film-page">
            <h2>Scooby-Doo: Legend of the Phantosaur</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/d/d7/Scooby-Doo_Legend_of_the_Phantosaur_cover.jpg"
                    alt="Scooby-Doo: Legend of the Phantosaur"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2011</p>
                    <p><strong>Genre:</strong> Animation, Mystery</p>
                    <p>
                        <strong>Description:</strong> Scooby-Doo and the gang uncover a prehistoric mystery in this thrilling adventure.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Scooby-Doo: Legend of the Phantosaur"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ScoobyDooLegendPhantosaurPage;
