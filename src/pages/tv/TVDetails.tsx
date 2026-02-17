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
                    <Link to={"/tv"} className="back__link">
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

                                </section>
                            </aside>
                        </div>
                    </article>
                </main>
            )}
        </React.Fragment>
    );
};


