import { Link } from "react-router";
import { User } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/w500";

interface ACT {
    id: number,
    name: string,
    profilePath: string | null,
    character?: string
};

export const ActorCard = ({ 
    id, name, profilePath, character
 }: ACT) => {
    return (
        <Link 
            className="actor"
            to={`/actor/${id}`}
        >
            <section className="actor__img">
                {profilePath ? (
                    <img 
                        alt={name}
                        src={`${IMG}${profilePath}`}
                    />
                ) : (
                    <aside className="actor__place">
                        <User />
                    </aside>
                )}
            </section>

            <section className="actor__content">
                <h3>{name}</h3>
                {character && (
                    <p className="actor__char">
                        {character}
                    </p>
                )}
            </section>
        </Link>
    );
};



