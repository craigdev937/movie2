import "./FilmCard.css";
import { Link } from "react-router";
import { Star, Calendar } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/w500";

interface MC {
    id: number,
    title: string,
    posterPath: string | null,
    voteAverage: number,
    releaseDate: string,
    type: "movie" | "tv"
};

export const FilmCard = ({
    id, title, posterPath, type,
    voteAverage, releaseDate, 
}: MC) => {
    const linkPath = type === "movie" ? 
        `/films/${id}` : `/tv/${id}`;
    
    return (
        <Link 
            className="media__card"
            to={linkPath}
        >
            <section className="media__content">
                <h3>{title}</h3>
                <aside className="media__date">
                    <Calendar />
                    <span>{releaseDate ? new Date(releaseDate)
                        .getFullYear() : "N/A"}
                    </span>
                </aside>
            </section>
            <section className="media__img">
                {posterPath ? (
                    <img 
                        alt={title}
                        src={`${IMG}${posterPath}`}  
                    />
                ) : (
                    <aside className="media__plc">
                        No Image
                    </aside>
                )}
                <aside className="media__rating">
                    <Star className="media__star" />
                    <span>
                        {voteAverage.toFixed(1)}
                    </span>
                </aside>
            </section>
        </Link>
    );
};



