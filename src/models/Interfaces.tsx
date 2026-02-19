export interface IFilm {
    pages: number,
    total_pages: number,
    total_results: number,
    results: [{
        id: number,
        title: string,
        overview: string,
        poster_path: string,
        backdrop_path: string,
        genre_ids: number[],
        popularity: number,
        release_date: string,
        vote_average: number,
        vote_count: number
    }]
};

export interface ITV {
    page: number,
    total_pages: number,
    total_results: number,
    results: [{
        id: number,
        name: string,
        overview: string,
        poster_path: string,
        backdrop_path: string,
        media_type: string,
        genre_ids: number[],
        popularity: number,
        first_air_date: string,
        vote_average: number,
        vote_count: number
    }]
};

export interface IFDetail {
    id: number,
    title: string,
    tagline: string,
    overview: string,
    release_date: string,
    revenue: number,
    runtime: number,
    backdrop_path: string,
    poster_path: string,
    homepage: string,
    vote_average: number,
    vote_count: number,
    popularity: number,
    genres: [{
        id: number,
        name: string
    }],
    credits: {
        cast: [{
            id: number,
            name: string,
            gender: number,
            character: string,
            popularity: number,
            profile_path: string,
        }]
    }
};

export interface ITVDetails {
    id: number,
    name: string,
    overview: string,
    popularity: number,
    backdrop_path: string,
    poster_path: string,
    tagline: string,
    vote_average: number,
    first_air_date: string,
    number_of_seasons: number,
    number_of_episodes: number,
    genres: [{
        id: number,
        name: string
    }],
    homepage: string,
    credits: {
        cast: [{
            id: number,
            name: string,
            gender: number,
            character: string,
            popularity: number,
            profile_path: string,
        }]
    }
};

export interface IFav {
    favorites: IFDetail[]
};

export interface IActor {
    biography: string,
    birthday: string,
    gender: number,
    homepage: string,
    id: number,
    known_for_department: string,
    name: string,
    place_of_birth: string,
    popularity: number,
    profile_path: string,
    movie_credits: {
        cast: [{
            id: number,
            overview: string,
            popularity: number,
            poster_path: string,
            title: string,
            character: string,
            vote_average: number,
            release_date: string
        }]
    },
    tv_credits: {
        cast: [{
            id: number,
            name: string,
            overview: string,
            popularity: number,
            character: string,
            title: string,
            poster_path: string,
            vote_average: number,
            first_air_date: string
        }]
    }
};

export interface IAInfo {
    id: number,
    name: string,
    homepage: string,
    biography: string,
    birthday: string,
    place_of_birth: string,
    known_for_department: string,
    popularity: number,
    profile_path: string
};




