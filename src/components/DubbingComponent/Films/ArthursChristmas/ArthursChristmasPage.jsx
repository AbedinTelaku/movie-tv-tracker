import React from 'react';

const ArthursChristmasPage = () => {
    return (
        <div className="film-page">
            <h2>Arthur's Christmas</h2>
            <div className="film-details"
            style={{
                backgroundImage: `url("https://images6.alphacoders.com/797/797593.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                
                height: '100vh', 
                margin: 0, 
                padding: 0, 
                overflow: 'hidden',
            }}>
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
                    src="https://vidmoly.to/embed-8qp5c3fhazye.html"
                    title="Arthur's Christmas"
                    allowFullScreen
                    className="film-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ArthursChristmasPage;
