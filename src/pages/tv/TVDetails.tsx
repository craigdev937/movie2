import React from "react";
import "./TVDetails.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { ActorCard } from "../../components/actor/ActorCard";
import { Star, Calendar, Tv, ArrowLeft } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/original";
const POS = "https://image.tmdb.org/t/p/w500";

export const TVDetails = () => {
    const { id } = useParams()
    const TID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = TMDB.useTdetailQuery(TID);
    const TV = data!;
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
                <main>
                    <Link to={"/tv"} className="tv__back">
                        <ArrowLeft />
                        <span>Back to TV</span>
                    </Link>

                    <article 
                        className="tv__hero"
                        style={{
                            backgroundImage: TV.backdrop_path ?
                            `url(${IMG}${TV.backdrop_path})` :
                            "none"
                        }}
                    >
                        <div className="tv__overlay"></div>
                        <div className="tv__content">
                            <aside className="tv__grid">
                                <section className="tv__poster">
                                    {TV.poster_path ? (
                                        <img 
                                            alt={TV.name}
                                            src={`${POS}${TV.poster_path}`}
                                        />
                                    ) : (
                                        <div className="tv__placeholder">
                                            No Image
                                        </div>
                                    )}
                                </section>

                                <section className="tv__info">
                                    <h1>{TV.name}</h1>
                                    {TV.tagline && (
                                        <p className="tv__tagline">{TV.tagline}</p>
                                    )}

                                    <aside className="tv__meta">
                                        <div className="tv__badge">
                                            <Star icon-yellow />
                                            <span className="tv__value">
                                                {TV.vote_average.toFixed(1)}
                                            </span>
                                            <span className="tv__suffix">/ 10</span>
                                        </div>

                                        <div className="tv__badge">
                                            <Calendar icon-cyan />
                                            <span>
                                                {new Date(TV.first_air_date)
                                                    .getFullYear()}
                                            </span>
                                        </div>

                                        <div className="tv__badge">
                                            <Tv icon-cyan />
                                            <span>{TV.number_of_seasons} Seasons</span>
                                        </div>

                                        <div className="tv__badge">
                                            <span>{TV.number_of_episodes} Episodes</span>
                                        </div>

                                        <div className="tv__genre">
                                            {TV.genres.map((genre) => (
                                                <span 
                                                    className="tv__tag" 
                                                    key={genre.id}
                                                >
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="tv__section">
                                            <h2>Overview</h2>
                                            <p>{TV.overview}</p>
                                        </div>
                                    </aside>

                                    {TV.credits.cast.length > 0 && (
                                        <section className="cast__section">
                                            <h2>Cast</h2>
                                            <aside className="cast__grid">
                                                {TV.credits.cast.slice(0, 12).map((actor) => (
                                                    <ActorCard 
                                                        key={actor.id}
                                                        id={actor.id}
                                                        name={actor.name}
                                                        profilePath={actor.profile_path}
                                                        character={actor.character}
                                                    />
                                                ))}
                                            </aside>
                                        </section>
                                    )}
                                </section>
                            </aside>
                        </div>
                    </article>
                </main>
            )}
        </React.Fragment>
    );
};


