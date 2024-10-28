import React, { useState } from 'react';
import './FilmStyle.css';

const FilmsComponent = () => {
  const popularMovies = [
    {
      title: "My Generation",
      duration: "1hr 24 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-53.jpg",
    },
    {
      title: "Love, Simon",
      duration: "1hr 50 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-32.jpeg",
    },
    {
      title: "Have A Nice Day",
      duration: "1hr 17 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-14.jpeg",
    },
    {
      title: "Don Of Thieves",
      duration: "2hr 20 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-61.jpg",
    },
    {
      title: "Avengers: Endgame",
      duration: "3hr 2 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-25.jpeg",
    },
    {
      title: "Inception",
      duration: "2hr 28 mins",
      genre: "Sci-Fi",
      imageUrl: "https://i.ebayimg.com/images/g/B8oAAOSw2fdg5A-h/s-l1200.jpg",
    }
  ];

  const viewedMovies = [
    {
      title: "Spider-Man: No Way Home",
      duration: "2hr 30 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-30.jpeg",
    },
    {
      title: "The Dark Knight",
      duration: "2hr 32 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-33.jpeg",
    },
    {
      title: "Interstellar",
      duration: "2hr 49 mins",
      genre: "Sci-Fi",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-60.jpg",
    },
    {
      title: "The Matrix",
      duration: "2hr 16 mins",
      genre: "Sci-Fi",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-57.jpg",
    },
    {
      title: "Joker",
      duration: "2hr 2 mins",
      genre: "Drama",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-23.jpeg",
    },
    {
      title: "Mad Max: Fury Road",
      duration: "2hr",
      genre: "Action",
      imageUrl: "https://m.media-amazon.com/images/I/81J6CaUe+GL.jpg",
    }
  ];

  const [currentPopularIndex, setCurrentPopularIndex] = useState(0);
  const [currentViewedIndex, setCurrentViewedIndex] = useState(0);

  const prevPopularSlide = () => {
    if (currentPopularIndex === 0) return;
    setCurrentPopularIndex(currentPopularIndex - 1);
  };

  const nextPopularSlide = () => {
    if (currentPopularIndex === popularMovies.length - 4) return;
    setCurrentPopularIndex(currentPopularIndex + 1);
  };

  const prevViewedSlide = () => {
    if (currentViewedIndex === 0) return;
    setCurrentViewedIndex(currentViewedIndex - 1);
  };

  const nextViewedSlide = () => {
    if (currentViewedIndex === viewedMovies.length - 4) return;
    setCurrentViewedIndex(currentViewedIndex + 1);
  };

  return (
    <div className="films-container">
      <h2>Most Popular</h2>
      <div className="slider-container">
        <button className="prev" onClick={prevPopularSlide}>
          &#10094;
        </button>
        <div className="films-list">
          {popularMovies.slice(currentPopularIndex, currentPopularIndex + 4).map((movie, index) => (
            <div className="film-card" key={index}>
              <img src={movie.imageUrl} alt={movie.title} />
              <div className="film-info">
                <h3>{movie.title}</h3>
                <p>{movie.duration} <span className="dot">•</span> <span className="genre">{movie.genre}</span></p>
                <div className="film-actions">
                  <i className="far fa-heart"></i>
                  <i className="fas fa-share-alt"></i>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextPopularSlide}>
          &#10095;
        </button>
      </div>

      <h2>Most Viewed</h2>
      <div className="slider-container">
        <button className="prev" onClick={prevViewedSlide}>
          &#10094;
        </button>
        <div className="films-list">
          {viewedMovies.slice(currentViewedIndex, currentViewedIndex + 4).map((movie, index) => (
            <div className="film-card" key={index}>
              <img src={movie.imageUrl} alt={movie.title} />
              <div className="film-info">
                <h3>{movie.title}</h3>
                <p>{movie.duration} <span className="dot">•</span> <span className="genre">{movie.genre}</span></p>
                <div className="film-actions">
                  <i className="far fa-heart"></i>
                  <i className="fas fa-share-alt"></i>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextViewedSlide}>
          &#10095;
        </button>
      </div>

      <div className="more-videos">
        <button>More Videos</button>
      </div>
    </div>
  );
};

export default FilmsComponent;
