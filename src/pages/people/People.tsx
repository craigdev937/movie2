import React from "react";
import "./People.css";
import { Link, useParams } from "react-router";
import { User, MapPin, Calendar, ArrowLeft, 
    Film, Tv } from "lucide-react";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { MediaCard } from "../../components/media/MediaCard";
const IMG = "https://image.tmdb.org/t/p/w500";

export const People = () => {
    const { id } = useParams();
    const AID = id !== undefined ? Number(id) : 0;
    const [act, setAct] = React.useState<"films" | "tv">("films");
    const { error, isLoading, data } = TMDB.useActQuery(AID);
    const ACT = data!;
    // console.log(data);

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
                    <Link to={"/"} className="back__link">
                    <ArrowLeft />
                        <span>Back</span>
                    </Link>
                    

                    <section className="actor">
                        <article className="actor__details">
                            <aside className="actor__grid">
                                <div className="actor__poster">
                                    {ACT.profile_path ? (
                                        <img 
                                            alt={ACT.name}
                                            src={`${IMG}${ACT.profile_path}`} 
                                        />
                                    ) : (
                                        <div className="actor__placeholder">
                                            <User />
                                        </div>
                                    )}
                                </div>
                            </aside>
                        </article>
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


