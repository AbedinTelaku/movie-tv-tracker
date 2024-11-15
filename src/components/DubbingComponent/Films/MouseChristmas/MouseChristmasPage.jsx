import React from 'react';

const MouseChristmasPage = () => {
    return (
        <div className="film-page">
            <h2>Mouse Christmas</h2>
            <div className="film-details">
                <img
                    src="https://example.com/mouse-christmas-poster.jpg"
                    alt="Mouse Christmas"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2018</p>
                    <p><strong>Genre:</strong> Animation, Family</p>
                    <p>
                        <strong>Description:</strong> A delightful tale of a little mouse who saves Christmas with big dreams and a brave heart.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Mouse Christmas"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default MouseChristmasPage;
