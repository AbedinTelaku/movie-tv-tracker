import React from 'react';
import './PandaStyle.css';

const KungFuPandaPage = () => {
    return (
        <div className="kungfu-panda-page">
            <h2>Kung Fu Panda 4 (2024)</h2>
            <div className="film-details">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Kung_Fu_Panda_4_teaser_poster.jpg/220px-Kung_Fu_Panda_4_teaser_poster.jpg"
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

export default KungFuPandaPage;
