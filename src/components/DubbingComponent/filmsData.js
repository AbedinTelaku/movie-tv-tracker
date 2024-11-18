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
        iframe_link: 'https://vidmoly.to/embed-q0cxf8hwqc0v.html',
        description: 'A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs.',
        photo_background: 'https://wallpapercat.com/w/full/2/f/2/949443-1920x1080-desktop-1080p-mcqueen-cars-background-photo.jpg',
        link:"/dubbing/cars"
    },
    {
        id: 5,
        title: 'Hotel Transylvania 2',
        release_date: '2015',
        poster_path: 'https://miro.medium.com/v2/resize:fit:1200/0*hdry-u75HPCNxfQ_.jpg',
        genre: 'Animation, Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-4n77gy6zubs4.html',
        description: 'Dracula and his friends try to bring out the monster in his half-human, half-vampire grandson.',
        photo_background: 'https://wallpapers.com/images/featured/hotel-transylvania-2-pictures-4cfi3vijkioin1hz.jpg',
        link:"/dubbing/hotel-transylvania-2"
    },
    {
        id: 6,
        title: 'Hotel Transylvania 1',
        release_date: '2012',
        poster_path: 'https://resizing.flixster.com/Q_mB4Il7ODF1yr_v4r6xGe74lD8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9128632_v_v12_ae.jpg',
        genre: 'Animation, Comedy, Family',
        iframe_link: 'https://vidmoly.to/embed-8xjvn27ouj9i.html',
        description: 'Count Dracula operates a high-end resort away from the human world.',
        photo_background: 'https://wallpapers.com/images/featured/hotel-transylvania-2-pictures-4cfi3vijkioin1hz.jpg',
        link:"/dubbing/hotel-transylvania-1"
    },
    {
        id: 7,
        title: "Olaf's Frozen Adventure",
        release_date: '2017',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMzRlNWU1NjMtMTY3ZC00MmQxLTk0YWEtNzcxNzI3NjFhNDQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Short, Comedy',
        iframe_link: 'https://vidmoly.to/embed-r33rwnzwj32b.html',
        description: 'Olaf teams up with Sven on a merry mission to bring Christmas traditions to Anna and Elsa.',
        photo_background: 'https://images4.alphacoders.com/908/908919.jpg',
        link:"/dubbing/olaf-frozen-adventure"
    },
    {
        id: 8,
        title: 'Inside My Mind 2',
        release_date: '2018',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Family, Fantasy',
        iframe_link: 'https://vidmoly.to/embed-9ngnr0gdcl2x.html',
        description: 'Riley navigates life’s challenges with her new emotions in tow.',
        photo_background: 'https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/207467766_207467766-d6cdb0935e704569bfd30c86ad3bd47d_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d',
        link:"/dubbing/inside-my-mind-2"
    },
    {
        id: 9,
        title: "Arthur's Christmas",
        release_date: '2011',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_.jpg',
        genre: 'Animation, Family, Adventure',
        iframe_link: 'https://vidmoly.to/embed-8qp5c3fhazye.html',
        description: 'Santa\'s youngest son Arthur embarks on a mission to deliver a present to a young girl.',
        photo_background: 'https://peelarchivesblog.com/wp-content/uploads/2021/12/arthur-christmas.jpg',
        link:"/dubbing/arthur-christmas"
    },
    {
        id: 10,
        title: 'Mouse Christmas',
        release_date: '2005',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMTVkZmEzZGYtZTllYy00NGNhLTlhZGQtNGM1MWY3ODQzNzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Animation, Family, Comedy',
        iframe_link: 'https://vidmoly.to/embed-peh793dzujdl.html',
        description: 'A mischievous mouse sets out on a heartwarming Christmas adventure.',
        photo_background: 'https://images.moviesanywhere.com/movie-hero/db93def423f2aa1a914122ba928070fd.png?r=16x9&w=2560',
        link:"/dubbing/mouse-christmas"
    },
    {
        id: 11,
        title: "Miyazaki's Spirited Away",
        release_date: '2001',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Fantasy, Adventure',
        iframe_link: 'https://vidmoly.to/embed-7ilkg5d9o8hd.html',
        description: 'A young girl, Chihiro, becomes trapped in a mysterious world of spirits.',
        photo_background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTT-GwG5vYwWdhbMQWYqXTmmtag7IKE0wD1w&s',
        link:"/dubbing/miyazaki-spirited-away"
    },
    {
        id: 12,
        title: 'Pirate Fairy',
        release_date: '2014',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/f/fa/The_Pirate_Fairy_poster.jpg',
        genre: 'Animation, Adventure, Family',
        iframe_link: 'https://vidmoly.to/embed-uw1r78praxrf.html',
        description: 'When Zarina steals Pixie Hollow\'s blue pixie dust, Tinker Bell and her friends set out on an adventure to get it back.',
        photo_background: 'https://images4.alphacoders.com/803/thumb-1920-803975.jpg',
        link:"/dubbing/pirate-fairy"
    },
    {
        id: 13,
        title: 'TinkerBell',
        release_date: '2008',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BODVkNjU3OTItZDNiYi00Yjk3LWE0N2EtZjg2MDJiYWQwYTJjXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Family, Fantasy',
        iframe_link: 'https://vidmoly.to/embed-cekydg5x0w2u.html',
        description: 'Tinker Bell discovers her unique talent and learns the value of being true to herself.',
        photo_background:'https://c4.wallpaperflare.com/wallpaper/963/1005/311/5bd4a32a39bc7-wallpaper-preview.jpg',
        link:"/dubbing/tinkerbell"
    },
    {
        id: 14,
        title: 'Home',
        release_date: '2015',
        poster_path: 'https://images.flickdirect.com/movies/home/home-poster.jpg',
        genre: 'Animation, Comedy, Adventure',
        iframe_link: 'https://vidmoly.to/embed-o94c2dk4sfom.html',
        description: 'An alien on the run from his own people lands on Earth and makes friends with the adventurous Tip.',
        photo_background: 'https://images5.alphacoders.com/803/803939.jpg',
        link:"/dubbing/home"
    },
    {
        id: 15,
        title: 'Scooby-Doo: Legend of the Phantosaur',
        release_date: '2011',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/6/69/Scooby-Doo%21_Legend_of_the_Phantosaur.png',
        genre: 'Animation, Mystery, Family',
        iframe_link: 'https://vidmoly.to/embed-uxi59b8v26vc.html',
        description: 'Scooby-Doo and the gang encounter the mysterious Legend of the Phantosaur.',
        link:"/dubbing/scooby-doo-legend-of-the-phantosaur",
        photo_background: 'https://ovp.itv.com/images/special/j4czrx8/itv_hub/06_RailPromoLandscape/16x9?distributionPartner=itv_hub&fallback=standard&w=767&q=65&blur=0&bg=false',
    },
    {
        id: 16,
        title: 'Scooby-Doo: Mask of the Blue Falcon',
        release_date: '2012',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Scooby-Doo%21_Mask_of_the_Blue_Falcon_cover.jpg',
        genre: 'Animation, Mystery, Family',
        iframe_link: 'https://vidmoly.to/embed-733o2m3sgb5h.html',
        description: 'The gang attends a comic book convention where they encounter a villain modeled after the Blue Falcon.',
        photo_background: 'https://images8.alphacoders.com/812/812982.jpg',
        link:"/dubbing/scooby-doo-mask-of-the-blue-falcon"
    },
    {
        id: 17,
        title: 'Scooby-Doo! and the Monster of Mexico',
        release_date: '2003',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Scooby-Doo_and_the_Monster_of_Mexico.jpg',
        genre: 'Animation, Adventure, Family',
        iframe_link: 'https://vidmoly.to/embed-ivr2e73js2gm.html',
        description: 'Scooby-Doo and the gang travel to Mexico to unravel a monstrous mystery.',
        photo_background: 'https://m.media-amazon.com/images/M/MV5BOTg2ZGFmNDgtZjcwOC00MzViLTliMmMtMzMxODliNjJiNWRiXkEyXkFqcGc@._V1_.jpg',
        link:"/dubbing/scooby-doo-and-the-monster-of-mexico"
    },
    {
        id: 18,
        title: 'League of Superpets',
        release_date: '2022',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BY2RkOTM1ZTQtNWQ3NS00YzdjLWIyMmQtYzMzNzI2ZjQwZjlmXkEyXkFqcGc@._V1_.jpg',
        genre: 'Animation, Action, Comedy',
        iframe_link: 'https://vidmoly.to/embed-a17gmtl8n90c.html',
        description: 'Krypto the Super-Dog teams up with a group of shelter pets who have superpowers.',
        photo_background:'https://www.alternateending.com/wp-content/uploads/2022/08/aY7XkGUMTUGgw9xCfooMexUPHLH.jpg',
        link:"/dubbing/league-of-superpets"
    },
    {
        id: 19,
        title: 'Tom and Jerry: The Wizard of Oz',
        release_date: '2011',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMzI2MjY0NDE1NF5BMl5BanBnXkFtZTgwMjcyMDEwNzE@._V1_.jpg',
        genre: 'Animation, Adventure, Comedy',
        iframe_link: 'https://vidmoly.to/embed-wxznipv79h0j.html',
        description: 'Tom and Jerry get swept into Kansas and join Dorothy on her journey to the Emerald City.',
        photo_background: 'https://m.media-amazon.com/images/M/MV5BYzE2NGJlMjQtNWQ4OC00MzQ4LWE0MTYtNzExNDBiMTQyOGM1XkEyXkFqcGc@._V1_.jpg',
        link:"/dubbing/tom-and-jerry-the-wizard-of-oz"
    },
    {
        id: 20,
        title: 'Tom and Jerry: Spy Quest',
        release_date: '2015',
        poster_path: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Tom%2Band%2Bjerry%2Bspy%2Bquest%2Bbox.jpg',
        genre: 'Animation, Action, Comedy',
        iframe_link: 'https://vidmoly.to/embed-sacs58l1jwt1.html',
        description: 'Tom and Jerry join forces with Jonny Quest and his team to take down an evil mastermind.',
        photo_background: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/528fdbf2-18ff-4d16-b325-73e68beaee93/543d6720f4448b331a8392904f77dd1560f8480d.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
        link:"/dubbing/tom-and-jerry-spy-quest"
    }
];

export default filmsData;