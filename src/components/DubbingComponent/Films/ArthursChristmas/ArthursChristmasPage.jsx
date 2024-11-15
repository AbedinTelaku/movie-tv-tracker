import React from 'react';

const ArthursChristmasPage = () => {
    return (
        <div className="film-page">
            <h2>Arthur's Christmas</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/e/e2/Arthur_Christmas_Poster.jpg"
                    alt="Arthur's Christmas"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2011</p>
                    <p><strong>Genre:</strong> Animation, Family, Comedy</p>
                    <p>
                        <strong>Description:</strong> Santa's clumsy son Arthur sets out on a magical mission to save Christmas.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Arthur's Christmas"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ArthursChristmasPage;
