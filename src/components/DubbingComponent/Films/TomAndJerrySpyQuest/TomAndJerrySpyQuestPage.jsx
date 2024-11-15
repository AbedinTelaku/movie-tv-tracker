import React from 'react';

const TomAndJerrySpyQuestPage = () => {
    return (
        <div className="film-page">
            <h2>Tom and Jerry: Spy Quest</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Tom_and_Jerry_Spy_Quest_DVD.jpg"
                    alt="Tom and Jerry: Spy Quest"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2015</p>
                    <p><strong>Genre:</strong> Animation, Comedy, Adventure</p>
                    <p>
                        <strong>Description:</strong> Tom and Jerry join forces with Jonny Quest in an epic spy adventure.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Tom and Jerry: Spy Quest"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default TomAndJerrySpyQuestPage;
