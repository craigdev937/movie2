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
                <main>
                    <Link to={"/films"} className="back__link">
                        <ArrowLeft />
                        <span>Back to Films</span>
                    </Link>

                    <section className="details__hero">
                        <img 
                            alt={DET.title}
                            src={`${IMG}${DET.backdrop_path}`}  
                        />
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
                                            <Star />
                                        </div>
                                    </aside>
                                </div>
                            </section>
                        </aside>
                    </section>
                    <section>
                        <h1>{DET.title}</h1>
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


