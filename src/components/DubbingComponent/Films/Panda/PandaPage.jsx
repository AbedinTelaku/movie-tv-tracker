import React from 'react';
import '../FilmsDubbingStyle.css';

const PandaPage = () => {
    return (
        <div className="film-page">
            <div className="film-details"
            style={{
                backgroundImage: `url("https://images5.alphacoders.com/134/1344939.jpeg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '100vh', 
                margin: 0, 
                padding: 0, 
                overflow: 'hidden',
            }}>
                <img
                    src=""
                    alt="Kung Fu Panda 4"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2024</p>
                    <p><strong>Genre:</strong> Animation, Action, Comedy</p>
                    <p>
                        <strong>Description:</strong> Po, the beloved Dragon Warrior, embarks on a new journey to protect the Valley of Peace, confronting a new challenge that will test his strength, wisdom, and courage.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-xdxz6t87og2z.html"
                    title="Kung Fu Panda 4 (2024)"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default PandaPage;
