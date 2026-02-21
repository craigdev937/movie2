import React from "react";
import "./Act.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../spin/Spinner";
import { TVCard } from "../media/TVCard";
import { FilmCard } from "../media/FilmCard";
import { ArrowLeft, Calendar, Film, MapPin, Tv, User } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Act = () => {
    const { id } = useParams();
    const AID = id !== undefined ? Number(id) : 0;
    const [activeTab, setActiveTab] = React.useState<"movie" | "tv">("movie");
    const { error, isLoading, data } = TMDB.useActQuery(AID);
    const A = data!;

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
                <main className="act">
                    <Link 
                        to={"/"} 
                        className="act__back"
                    >
                        <ArrowLeft />
                        <span>Home</span>
                    </Link>

                    <article className="act__card">
                        <div className="act__content">
                            <section className="act__grid">
                                <aside className="act__poster">
                                    {A.profile_path ? (
                                        <img 
                                            alt={A.name}
                                            src={`${IMG}${A.profile_path}`}
                                        />
                                    ) : (
                                        <div className="act__placeholder">
                                            <User />
                                        </div>
                                    )}
                                </aside>

                                <aside className="act__info">
                                    <h1>{A.name}</h1>
                                    <div className="act__meta">
                                        {A.birthday &&  (
                                            <div className="act__badge">
                                                <Calendar icon-cyan />
                                                <span>
                                                    {new Date(A.birthday).toLocaleDateString()}
                                                </span>
                                            </div>
                                        )}

                                        {A.place_of_birth && (
                                            <div className="act__badge">
                                                <MapPin icon-cyan />
                                                <span>{A.place_of_birth}</span>
                                            </div>
                                        )}

                                        <div className="act__dept">
                                            {A.known_for_department}
                                        </div>
                                    </div>

                                    {A.biography &&  (
                                        <div>
                                            <h2 className="act__title">Biography</h2>
                                            <p className="act__bio">{A.biography}</p>
                                        </div>
                                    )}
                                </aside>
                            </section>
                        </div>
                    </article>

                    <article className="act__tabs">
                        <section className="tabs__cont">
                            <button
                                className={activeTab === "movie" 
                                    ? "tab__btn active" : "tab__btn"}
                                onClick={() => setActiveTab("movie")}
                            >
                                <Film />
                                <span>Films ({A.movie_credits.cast.length})</span>
                            </button>

                            <button
                                className={activeTab === "tv" 
                                    ? "tab__btn active" : "tab__btn"}
                                onClick={() => setActiveTab("tv")}
                            >
                                <Tv />
                                <span>TV Shows ({A.tv_credits.cast.length})</span>
                            </button>
                        </section>
                    </article>

                    {activeTab === "movie" && A.movie_credits.cast.length > 0 && (
                        <div className="film__sec">
                            <h2>Films</h2>
                            <section>
                                {A.movie_credits.cast
                                    .toSorted((a, b) => b.popularity - a.popularity)
                                    .slice(0, 20)
                                    .map((film) => (
                                        <FilmCard 
                                            type="movie"
                                            key={film.id}
                                            id={film.id}
                                            title={film.title}
                                            posterPath={film.poster_path}
                                            voteAverage={film.vote_average}
                                            releaseDate={film.release_date}
                                        />
                                    ))}
                            </section>
                        </div>
                    )}

                    {activeTab === "tv" && A.tv_credits.cast.length > 0 && (
                        <div className="film__sec">
                            <h2>TV Shows</h2>
                            <section>
                                {A.tv_credits.cast
                                    .toSorted((a, b) => b.popularity - a.popularity)
                                    .slice(0, 20)
                                    .map((tv) => (
                                        <TVCard 
                                            type="tv"
                                            key={tv.id}
                                            id={tv.id}
                                            title={tv.title}
                                            posterPath={tv.poster_path}
                                            voteAverage={tv.vote_average}
                                            first_air_date={tv.first_air_date}
                                        />
                                    ))
                                }
                            </section>
                        </div>
                    )}
                </main>
            )}
        </React.Fragment>
    );
};


