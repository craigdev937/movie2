import React from "react";
import "./Films.css";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { MediaCard } from "../../components/media/MediaCard";

export const Films = () => {
    const { error, isLoading, data } = TMDB.useTfilmQuery();
    const FILM = data?.results;
    console.log(FILM);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className="film__grid">
                    {FILM && FILM.map((film) => (
                        <MediaCard 
                            key={film.id}
                            id={film.id}
                            type="movie"
                            title={film.title}
                            posterPath={film.poster_path}
                            voteAverage={film.vote_average}
                            releaseDate={film.release_date}
                        />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


