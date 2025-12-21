import React from "react";
import "./FilmDetails.css";
import { Link, useParams } from "react-router";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { ActorCard } from "../../components/actor/ActorCard";
const IMG = "https://image.tmdb.org/t/p/original";
const POS = "https://image.tmdb.org/t/p/w500";

export const FilmDetails = () => {
    const { id } = useParams();
    const FID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useFdetailQuery(FID);
    const DET = data!;
    
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
            <main className="film__details">
                <Link to={"/films"} className="back__link">
                    <ArrowLeft />
                    <span>Back to Films</span>
                </Link>

                <section className="details__hero"
                    style={{
                        backgroundImage: DET.backdrop_path ?
                        `url(${IMG}${DET.backdrop_path})` :
                        "none"
                    }}
                >
                    <div className="details__overlay"></div>
                    <aside className="details__content">
                        <section className="details__grid">
                            <div className="details__poster">
                                {DET.poster_path ? (
                                    <img 
                                        alt={DET.title}
                                        src={`${POS}${DET.poster_path}`}  
                                    />
                                ) : (
                                    <div className="details__place">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className="details__info">
                                <h1>{DET.title}</h1>
                                {DET.tagline && (
                                    <p className="details__tagline">
                                        {DET.tagline}
                                    </p>
                                )}

                                <aside className="details__meta">
                                    <div className="meta__badge">
                                        <Star className="meta__star" />
                                        <span className="meta__value">
                                            {DET.vote_average.toFixed(1)}
                                        </span>
                                        <span className="meta__suffix">/ 10</span>
                                    </div>

                                    <div className="meta__badge">
                                        <Calendar className="meta__calendar" />
                                        <span>
                                            {new Date(DET.release_date)
                                                .getFullYear()}
                                        </span>
                                    </div>

                                    <div className="meta__badge">
                                        <Clock className="meta__clock" />
                                        <span>{DET.runtime}</span>
                                    </div>

                                    <div className="details__genre">
                                        {DET.genres.map((genre) => (
                                            <span 
                                                key={DET.id}
                                                className="genre__tag"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="details__section">
                                        <h2>Overview</h2>
                                        <p>{DET.overview}</p>
                                    </div>
                                </aside>
                            </div>
                        </section>
                    </aside>
                </section>

                {DET.credits.cast.length > 0 && (
                    <section className="cast__section">
                        <h2>Cast</h2>
                        <aside className="cast__grid">
                            {DET.credits.cast.slice(0, 12).map((actor) => (
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
            </main>
        )}
    </React.Fragment>
    );
};


