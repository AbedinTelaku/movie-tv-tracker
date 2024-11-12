// HomeAlonePage.jsx
import React from 'react';
import './HomeAloneStyle.css';

const HomeAlonePage = () => {
    return (
        <div className="home-alone-page">
            <h2>Home Alone 2</h2>
            <div className="film-details">
                <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrdsA4OHZftYGLKuVIFKmOdzZFyIJSrbsZ840-9QyXPB7vbecW00RVM0jd6vhb3VAwwC8X"
                    alt="Home Alone 2"
                    className="film-poster"
                />
                <div className="film-info">
                    <p><strong>Release Date:</strong> 2000</p>
                    <p><strong>Genre:</strong> Comedy, Family</p>
                    <p>
                        <strong>Description:</strong> One year after Kevin was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.
                    </p>
                </div>
            </div>

            <div className="film-player">
                <iframe
                    src="https://vidmoly.to/embed-yoazwt65j8nh.html"
                    title="Home Alone 2"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default HomeAlonePage;
