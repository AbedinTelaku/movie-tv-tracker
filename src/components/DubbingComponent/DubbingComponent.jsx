import React from 'react';
import { Link } from 'react-router-dom';
import './DubbingStyle.css';

const DubbingComponent = () => {
    const dubbingFilms = [
        {
            id: 1,
            title: 'Home Alone 2',
            release_date: '2000',
            poster_path: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrdsA4OHZftYGLKuVIFKmOdzZFyIJSrbsZ840-9QyXPB7vbecW00RVM0jd6vhb3VAwwC8X',
            link: '/home-alone'
        },
        {
            id: 2,
            title: 'Moana',
            release_date: '2016',
            poster_path: 'https://lumiere-a.akamaihd.net/v1/images/eu_moana-movie_hero_m_006c78bd.jpeg',
            link: '/moana'
        },
        {
            id: 3,
            title: 'Kung Fu Panda 4',
            release_date: '2024',
            poster_path: 'https://play-lh.googleusercontent.com/ulf9BSafUkyorBbuqm3HudT8ZS6iqKhdbiZbbO3XpuTkhU6K28qjyoPcMLQEemNN9GNAfJ7JQDXkzzzZlw',
            link: '/kung-fu-panda-4'
        },
        {
            id: 4,
            title: 'Cars',
            release_date: '2006',
            poster_path: 'https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg',
            link: '/cars'
        },
        {
            id: 5,
            title: 'Hotel Transylvania 2',
            release_date: '2015',
            poster_path: 'https://miro.medium.com/v2/resize:fit:1200/0*hdry-u75HPCNxfQ_.jpg',
            link: '/hotel-transylvania-2'
        },
        {
            id: 6,
            title: 'Hotel Transylvania 1',
            release_date: '2012',
            poster_path: 'https://resizing.flixster.com/Q_mB4Il7ODF1yr_v4r6xGe74lD8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9128632_v_v12_ae.jpg',
            link: '/hotel-transylvania-1'
        },
        {
            id: 7,
            title: 'Olaf'+'s Frozen Adventure',
            release_date: '2017',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BMzRlNWU1NjMtMTY3ZC00MmQxLTk0YWEtNzcxNzI3NjFhNDQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            link: '/olafs-frozen-adventure'
        },
        {
            id: 8,
            title: 'Inside My Mind 2',
            release_date: '2018',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            link: '/inside-my-mind-2'
        },
        {
            id: 10,
            title: 'Dragon\'s Desire',
            release_date: '2020',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BMWM1YmJmYWMtMDM1Ni00ZGM2LTkxODYtOTU1ZjA4MTFkMDM1XkEyXkFqcGc@._V1_.jpg',
            link: '/dragons-desire'
        },
        {
            id: 11,
            title: 'Arthur\'s Christmas',
            release_date: '2011',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_.jpg',
            link: '/arthurs-christmas'
        },
        {
            id: 12,
            title: 'Mouse Christmas',
            release_date: '2005',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BMTVkZmEzZGYtZTllYy00NGNhLTlhZGQtNGM1MWY3ODQzNzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            link: '/mouse-christmas'
        },
        {
            id: 13,
            title: 'Miyazaki\'s Spirited Away',
            release_date: '2001',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
            link: '/spirited-away'
        },
        {
            id: 14,
            title: 'Pirate Fairy',
            release_date: '2014',
            poster_path: 'https://upload.wikimedia.org/wikipedia/en/f/fa/The_Pirate_Fairy_poster.jpg',
            link: '/pirate-fairy'
        },
        {
            id: 15,
            title: 'TinkerBell',
            release_date: '2008',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BODVkNjU3OTItZDNiYi00Yjk3LWE0N2EtZjg2MDJiYWQwYTJjXkEyXkFqcGc@._V1_.jpg',
            link: '/tinkerbell'
        },
        {
            id: 16,
            title: 'Home',
            release_date: '2015',
            poster_path: 'https://images.flickdirect.com/movies/home/home-poster.jpg',
            link: '/home'
        },
        {
            id: 17,
            title: 'Scooby-Doo: Legend of the Phantosaur',
            release_date: '2011',
            poster_path: 'https://upload.wikimedia.org/wikipedia/en/6/69/Scooby-Doo%21_Legend_of_the_Phantosaur.png',
            link: '/legend-of-the-phantosaur'
        },
        {
            id: 18,
            title: 'Scooby-Doo: Mask of the Blue Falcon',
            release_date: '2012',
            poster_path: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Scooby-Doo%21_Mask_of_the_Blue_Falcon_cover.jpg',
            link: '/mask-of-the-blue-falcon'
        },
        {
            id: 19,
            title: 'Scooby-Doo! and the Monster of Mexico',
            release_date: '2003',
            poster_path: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Scooby-Doo_and_the_Monster_of_Mexico.jpg',
            link: '/monster-of-mexico'
        },
        {
            id: 20,
            title: 'League of Superpets',
            release_date: '2022',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BY2RkOTM1ZTQtNWQ3NS00YzdjLWIyMmQtYzMzNzI2ZjQwZjlmXkEyXkFqcGc@._V1_.jpg',
            link: '/league-of-superpets'
        },
        {
            id: 21,
            title: 'Tom and Jerry: The Wizard of Oz',
            release_date: '2011',
            poster_path: 'https://m.media-amazon.com/images/M/MV5BMzI2MjY0NDE1NF5BMl5BanBnXkFtZTgwMjcyMDEwNzE@._V1_.jpg',
            link: '/wizard-of-oz'
        },
        {
            id: 22,
            title: 'Tom and Jerry: Spy Quest',
            release_date: '2015',
            poster_path: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Tom%2Band%2Bjerry%2Bspy%2Bquest%2Bbox.jpg',
            link: '/spy-quest'
        }
    ];
    

    return (
        <div className="dubbing-container">
            <h2>Dubbing Films</h2>
            <div className="films-list">
                {dubbingFilms.map((film) => (
                    <div className="film-card" key={film.id}>
                        <Link to={film.link}>
                            <img
                                src={film.poster_path}
                                alt={film.title}
                            />
                            <div className="film-info">
                                <h3>{film.title}</h3>
                                <p>{film.release_date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DubbingComponent;
