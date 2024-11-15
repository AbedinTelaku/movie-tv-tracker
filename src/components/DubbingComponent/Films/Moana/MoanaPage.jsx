// MoanaPage.js
import React from 'react';
import './MoanaStyle.css';

const MoanaPage = () => {
    return (
        <div className="moana-page">
            <h2>Moana (2016)</h2>
            <div className="film-details">
                <img
                    src="https://cbsaustin.com/resources/media2/16x9/5120/5120/320x0/90/328f6c54-7a7c-45c5-9294-110b885b3901-Film_Fall_Preview_Moana_2_24249445076615.jpg"
                    alt="Moana"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2016</p>
                    <p><strong>Genre:</strong> Animation, Adventure, Comedy</p>
                    <p>
                        <strong>Description:</strong> Moana, an adventurous teenager, sails out on a daring mission to save her people. Along the way, she meets the once-mighty demigod Maui, and together they embark on a thrilling journey.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-y92mqxzbljjh.html"
                    title="Moana dubluar në shqip (2016)"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default MoanaPage;
