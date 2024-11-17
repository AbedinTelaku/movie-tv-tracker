const filmsData = [
    {
        id: 1,
        title: 'Home Alone 2',
        release_date: '1992',
        poster_path: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrdsA4OHZftYGLKuVIFKmOdzZFyIJSrbsZ840-9QyXPB7vbecW00RVM0jd6vhb3VAwwC8X',
        genre: 'Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-yoazwt65j8nh.html',
        description: 'Kevin McCallister accidentally finds himself stranded in New York City.',
        photo_background:'https://images.moviesanywhere.com/movie-hero/1526c665489e8c2d62e22c8f5993545e.jpeg?r=16x9&w=2560',
        link:"/dubbing/home-alone"
    },
    {
        id: 2,
        title: 'Moana',
        release_date: '2016',
        poster_path: 'https://lumiere-a.akamaihd.net/v1/images/eu_moana-movie_hero_m_006c78bd.jpeg',
        genre: 'Animation, Adventure, Comedy',
        iframe_link: 'https://vidmoly.to/embed-y92mqxzbljjh.html',
        description: 'Moana, an adventurous teenager, sails out on a daring mission to save her people.',
        photo_background:'https://www.animationmagazine.net/wordpress/wp-content/uploads/MOANA2-ONLINE-USE-215.0_045.00-mono_fullcomp_RGB-6K.jpg',
        link:"/dubbing/moana"
    },
    {
        id: 3,
        title: 'Kung Fu Panda 4',
        release_date: '2024',
        poster_path: 'https://play-lh.googleusercontent.com/ulf9BSafUkyorBbuqm3HudT8ZS6iqKhdbiZbbO3XpuTkhU6K28qjyoPcMLQEemNN9GNAfJ7JQDXkzzzZlw',
        genre: 'Animation, Action, Comedy',
        iframe_link: 'https://vidmoly.to/embed-xdxz6t87og2z.html',
        description: 'Po and his friends take on an epic new adventure in the Valley of Peace.',
        photo_background:'https://blog.wego.com/wp-content/uploads/bea60651-08ab-4357-8b1f-291cf06b3cfb-1024x675.jpg',
        link:"/dubbing/kung-fu-panda-4"
    },
    {
        id: 4,
        title: 'Cars',
        release_date: '2006',
        poster_path: 'https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg',
        genre: 'Animation, Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-cars-123.html',
        description: 'A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs.',
        link:"/dubbing/cars"
    },
    {
        id: 5,
        title: 'Hotel Transylvania 2',
        release_date: '2015',
        poster_path: 'https://miro.medium.com/v2/resize:fit:1200/0*hdry-u75HPCNxfQ_.jpg',
        genre: 'Animation, Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-ht2-123.html',
        description: 'Dracula and his friends try to bring out the monster in his half-human, half-vampire grandson.',
        link:"/dubbing/hotel-transylvania-2"
    },
    {
        id: 6,
        title: 'Hotel Transylvania 1',
        release_date: '2012',
        poster_path: 'https://resizing.flixster.com/Q_mB4Il7ODF1yr_v4r6xGe74lD8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9128632_v_v12_ae.jpg',
        genre: 'Animation, Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-ht1-123.html',
        description: 'Count Dracula operates a high-end resort away from the human world.',
        link:"/dubbing/hotel-transylvania-1"
    },
    {
        id: 7,
        title: "Olaf's Frozen Adventure",
        release_date: '2017',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMzRlNWU1NjMtMTY3ZC00MmQxLTk0YWEtNzcxNzI3NjFhNDQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Short, Comedy',
        iframe_link: 'https://vidmoly.to/embed-olaf-123.html',
        description: 'Olaf teams up with Sven on a merry mission to bring Christmas traditions to Anna and Elsa.',
        link:"/dubbing/olaf-frozen-adventure"
    },
    {
        id: 8,
        title: 'Inside My Mind 2',
        release_date: '2018',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Family, Fantasy',
        iframe_link: 'https://vidmoly.to/embed-im2-123.html',
        description: 'Riley navigates life’s challenges with her new emotions in tow.',
        link:"/dubbing/inside-my-mind-2"
    },
    {
        id: 9,
        title: "Arthur's Christmas",
        release_date: '2011',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_.jpg',
        genre: 'Animation, Family, Adventure',
        iframe_link: 'https://vidmoly.to/embed-ac-123.html',
        description: 'Santa\'s youngest son Arthur embarks on a mission to deliver a present to a young girl.',
        link:"/dubbing/arthur-christmas"
    },
    {
        id: 10,
        title: 'Mouse Christmas',
        release_date: '2005',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMTVkZmEzZGYtZTllYy00NGNhLTlhZGQtNGM1MWY3ODQzNzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Family, Comedy',
        iframe_link: 'https://vidmoly.to/embed-mc-123.html',
        description: 'A mischievous mouse sets out on a heartwarming Christmas adventure.',
        link:"/dubbing/mouse-christmas"
    },
    {
        id: 11,
        title: "Miyazaki's Spirited Away",
        release_date: '2001',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Fantasy, Adventure',
        iframe_link: 'https://vidmoly.to/embed-sa-123.html',
        description: 'A young girl, Chihiro, becomes trapped in a mysterious world of spirits.',
        link:"/dubbing/miyazaki-spirited-away"
    },
    {
        id: 12,
        title: 'Pirate Fairy',
        release_date: '2014',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/f/fa/The_Pirate_Fairy_poster.jpg',
        genre: 'Animation, Adventure, Family',
        iframe_link: 'https://vidmoly.to/embed-pf-123.html',
        description: 'When Zarina steals Pixie Hollow\'s blue pixie dust, Tinker Bell and her friends set out on an adventure to get it back.',
        link:"/dubbing/pirate-fairy"
    },
    {
        id: 13,
        title: 'TinkerBell',
        release_date: '2008',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BODVkNjU3OTItZDNiYi00Yjk3LWE0N2EtZjg2MDJiYWQwYTJjXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Family, Fantasy',
        iframe_link: 'https://vidmoly.to/embed-tb-123.html',
        description: 'Tinker Bell discovers her unique talent and learns the value of being true to herself.',
        link:"/dubbing/tinkerbell"
    },
    {
        id: 14,
        title: 'Home',
        release_date: '2015',
        poster_path: 'https://images.flickdirect.com/movies/home/home-poster.jpg',
        genre: 'Animation, Comedy, Adventure',
        iframe_link: 'https://vidmoly.to/embed-home-123.html',
        description: 'An alien on the run from his own people lands on Earth and makes friends with the adventurous Tip.',
        link:"/dubbing/home"
    },
    {
        id: 15,
        title: 'Scooby-Doo: Legend of the Phantosaur',
        release_date: '2011',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/6/69/Scooby-Doo%21_Legend_of_the_Phantosaur.png',
        genre: 'Animation, Mystery, Family',
        iframe_link: 'https://vidmoly.to/embed-sdlp-123.html',
        description: 'Scooby-Doo and the gang encounter the mysterious Legend of the Phantosaur.',
        link:"/dubbing/scooby-doo-legend-of-the-phantosaur"
    },
    {
        id: 16,
        title: 'Scooby-Doo: Mask of the Blue Falcon',
        release_date: '2012',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Scooby-Doo%21_Mask_of_the_Blue_Falcon_cover.jpg',
        genre: 'Animation, Mystery, Family',
        iframe_link: 'https://vidmoly.to/embed-sdmbf-123.html',
        description: 'The gang attends a comic book convention where they encounter a villain modeled after the Blue Falcon.',
        link:"/dubbing/scooby-doo-mask-of-the-blue-falcon"
    },
    {
        id: 17,
        title: 'Scooby-Doo! and the Monster of Mexico',
        release_date: '2003',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Scooby-Doo_and_the_Monster_of_Mexico.jpg',
        genre: 'Animation, Adventure, Family',
        iframe_link: 'https://vidmoly.to/embed-sdmm-123.html',
        description: 'Scooby-Doo and the gang travel to Mexico to unravel a monstrous mystery.',
        link:"/dubbing/scooby-doo-and-the-monster-of-mexico"
    },
    {
        id: 18,
        title: 'League of Superpets',
        release_date: '2022',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BY2RkOTM1ZTQtNWQ3NS00YzdjLWIyMmQtYzMzNzI2ZjQwZjlmXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Action, Comedy',
        iframe_link: 'https://vidmoly.to/embed-lsp-123.html',
        description: 'Krypto the Super-Dog teams up with a group of shelter pets who have superpowers.',
        link:"/dubbing/league-of-superpets"
    },
    {
        id: 19,
        title: 'Tom and Jerry: The Wizard of Oz',
        release_date: '2011',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMzI2MjY0NDE1NF5BMl5BanBnXkFtZTgwMjcyMDEwNzE@._V1_.jpg',
        genre: 'Animation, Adventure, Comedy',
        iframe_link: 'https://vidmoly.to/embed-tjwo-123.html',
        description: 'Tom and Jerry get swept into Kansas and join Dorothy on her journey to the Emerald City.',
        link:"/dubbing/tom-and-jerry-the-wizard-of-oz"
    },
    {
        id: 20,
        title: 'Tom and Jerry: Spy Quest',
        release_date: '2015',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Tom%2Band%2Bjerry%2Bspy%2Bquest%2Bbox.jpg',
        genre: 'Animation, Action, Comedy',
        iframe_link: 'https://vidmoly.to/embed-tjsq-123.html',
        description: 'Tom and Jerry join forces with Jonny Quest and his team to take down an evil mastermind.',
        link:"/dubbing/tom-and-jerry-spy-quest"
    }
];

export default filmsData;