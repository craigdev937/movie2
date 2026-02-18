import React from "react";
import "./TV.css";
import { TMDB } from "../../global/TMDB";
import { TVCard } from "../../components/media/TVCard";
import { Spinner } from "../../components/spin/Spinner";

export const TV = () => {
    const { error, isLoading, data } = TMDB.useTtvQuery();
    const TV = data?.results;
    console.log(TV);

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
                <main className="grid__tv">
                    {TV && TV.map((tv) => (
                        <TVCard 
                            key={tv.id}
                            id={tv.id}
                            type="tv"
                            title={tv.name}
                            posterPath={tv.poster_path}
                            voteAverage={tv.vote_average}
                            first_air_date={tv.first_air_date}
                        />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


