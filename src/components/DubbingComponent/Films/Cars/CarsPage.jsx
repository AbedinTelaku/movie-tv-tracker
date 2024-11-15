import React from 'react';

const CarsPage = () => {
    return (
        <div className="film-page">
            <h2>Cars</h2>
            <div className="film-details">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1rq0mtb_292f0b7d.jpeg"
                    alt="Cars"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2006</p>
                    <p><strong>Genre:</strong> Animation, Adventure, Comedy</p>
                    <p>
                        <strong>Description:</strong> Lightning McQueen, a hotshot rookie race car, discovers that life is about the journey, not the finish line.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xyz.html"
                    title="Cars"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default CarsPage;
