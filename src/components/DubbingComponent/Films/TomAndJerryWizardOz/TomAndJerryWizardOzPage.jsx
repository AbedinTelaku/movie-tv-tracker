import React from 'react';

const TomAndJerryWizardOzPage = () => {
    return (
        <div className="film-page">
            <h2>Tom and Jerry: The Wizard of Oz</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/0e/Tom_and_Jerry_and_the_Wizard_of_Oz.jpg"
                    alt="Tom and Jerry: The Wizard of Oz"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2011</p>
                    <p><strong>Genre:</strong> Animation, Fantasy, Adventure</p>
                    <p>
                        <strong>Description:</strong> Tom and Jerry join Dorothy and Toto on their unforgettable journey to the Land of Oz.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Tom and Jerry: The Wizard of Oz"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default TomAndJerryWizardOzPage;
