import React from 'react';
import "../FilmsDubbingStyle.css"

const HomePageFilm = () => {
    return (
        <div className="film-page">
            <h2>Home</h2>
            <div className="film-details"
            style={{
                backgroundImage: `url("https://images.alphacoders.com/803/thumb-1920-803947.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '100vh', 
                margin: 0, 
                padding: 0, 
                overflow: 'hidden',
            }}>
               <h2>HOME</h2> 
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2015</p>
                    <p><strong>Genre:</strong> Animation, Comedy</p>
                    <p>
                        <strong>Description:</strong> A hilarious and heartwarming story about an alien named Oh and his adventures on Earth.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-o94c2dk4sfom.html"
                    title="Home"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HomePageFilm;
