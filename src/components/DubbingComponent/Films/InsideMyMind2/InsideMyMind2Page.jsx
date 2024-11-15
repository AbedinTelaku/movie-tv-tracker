import React from 'react';

const InsideMyMind2Page = () => {
    return (
        <div className="film-page">
            <h2>Inside My Mind 2</h2>
            <div className="film-details">
                <img
                    src="https://example.com/inside-my-mind-2-poster.jpg"
                    alt="Inside My Mind 2"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2019</p>
                    <p><strong>Genre:</strong> Animation, Adventure, Drama</p>
                    <p>
                        <strong>Description:</strong> A thrilling sequel that takes you deeper into the complexities of emotions and thoughts in a fantastical world.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Inside My Mind 2"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default InsideMyMind2Page;
