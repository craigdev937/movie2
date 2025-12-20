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
    }]
};






