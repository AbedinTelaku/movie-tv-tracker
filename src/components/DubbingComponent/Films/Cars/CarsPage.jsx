import React from 'react';
import '../FilmsDubbingStyle.css'

const CarsPage = () => {
    return (
        <div
            className="film-page"
            style={{
                backgroundImage: `url("https://i.pinimg.com/originals/9d/f5/ae/9df5ae08386f6fea284b7cb6473641d0.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
        >
            <h2>Cars</h2> 
            <div className="film-details">
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
                    src="https://vidmoly.to/embed-q0cxf8hwqc0v.html"
                    title="Cars"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default CarsPage;
