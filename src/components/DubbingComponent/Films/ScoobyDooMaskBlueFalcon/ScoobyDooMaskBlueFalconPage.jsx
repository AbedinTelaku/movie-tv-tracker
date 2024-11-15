import React from 'react';

const ScoobyDooMaskBlueFalconPage = () => {
    return (
        <div className="film-page">
            <h2>Scooby-Doo: Mask of the Blue Falcon</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/5/50/Scooby-Doo%21_Mask_of_the_Blue_Falcon.jpg"
                    alt="Scooby-Doo: Mask of the Blue Falcon"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2013</p>
                    <p><strong>Genre:</strong> Animation, Mystery, Comedy</p>
                    <p>
                        <strong>Description:</strong> The gang must solve the mystery of a villain disrupting the Blue Falcon movie premiere.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Scooby-Doo: Mask of the Blue Falcon"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ScoobyDooMaskBlueFalconPage;
