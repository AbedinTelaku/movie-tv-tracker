import React, { useMemo } from 'react';
import './FilmStyle.css';

const FilmsComponent = ({ searchTerm }) => {
  const popularMovies = [
    {
      title: "My Generation",
      duration: "1hr 24 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-53.jpg",
    },
    {
      title: "Venom: Let There Be Carnage",
      duration: "1hr 37 mins",
      genre: "Sci-Fi",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-23.jpg",
    },
    {
      title: "The Water Man",
      duration: "2hr 15 mins",
      genre: "Drama",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-48.jpg",
    },
    {
      title: "Uncharted",
      duration: "2hr 05 mins",
      genre: "Adventure",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-33.jpeg",
    },
  ];

  const viewedMovies = [
    {
      title: "Spider-Man: No Way Home",
      duration: "2hr 30 mins",
      genre: "Action",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-30.jpeg",
    },
    {
      title: "Jungle Cruise",
      duration: "1hr 59 mins",
      genre: "Fantasy",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-35.jpeg",
    },
    {
      title: "Free Guy",
      duration: "1hr 55 mins",
      genre: "Comedy",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-37.jpeg",
    },
    {
      title: "Luca",
      duration: "1hr 35 mins",
      genre: "Animation",
      imageUrl: "https://template.gentechtreedesign.com/html/streamlab/red-html/images/background/asset-40.jpeg",
    },
  ];

  const filteredPopularMovies = useMemo(
    () =>
      popularMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
      ),
    [searchTerm, popularMovies]
  );

  const filteredViewedMovies = useMemo(
    () =>
      viewedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
      ),
    [searchTerm, viewedMovies]
  );

  return (
    <div className="films-container">
      <h2>Most Popular</h2>
      <div className="films-list">
        {filteredPopularMovies.map((movie, index) => (
          <div className="film-card" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="film-info">
              <h3>{movie.title}</h3>
              <p>
                {movie.duration} <span className="dot">•</span>{" "}
                <span className="genre">{movie.genre}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2>Most Viewed</h2>
      <div className="films-list">
        {filteredViewedMovies.map((movie, index) => (
          <div className="film-card" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="film-info">
              <h3>{movie.title}</h3>
              <p>
                {movie.duration} <span className="dot">•</span>{" "}
                <span className="genre">{movie.genre}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmsComponent;
