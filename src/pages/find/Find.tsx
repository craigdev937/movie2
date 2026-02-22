import React from "react";
import "./Find.css";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Find = () => {
    const [query, setQuery] = React.useState("");
    const [sub, setSub] = React.useState("");

    const { error, isLoading, data } = TMDB.useFindQuery(sub, {
        skip: sub.length === 0
    });
    const FI = data?.results;
    console.log(FI);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSub(query.trim());
    };

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
                <main className="find">
                    <section className="find__panel">
                        <form 
                            className="find__form"
                            onSubmit={handleSubmit} 
                        >
                            <label 
                                htmlFor="find"
                                >Search Films, TV, People
                            </label>
                            <aside className="find__row">
                                <input 
                                    type="text" 
                                    id="find"
                                    placeholder="Find TMDB..."
                                    value={query}
                                    onChange={handleChange}
                                />
                                <button type="submit">Find</button>
                            </aside>
                        </form>
                    </section>

                    <section className="find__results">
                        {FI && (
                            <ul className="find__grid container">
                                {FI.map((find) => (
                                    <li 
                                        className="find__card"
                                        key={find.id}
                                    >
                                        <img 
                                            loading="lazy"
                                            alt={find.title || find.name}
                                            src={`${IMG}${find.poster_path
                                                || find.backdrop_path}`} 
                                        />
                                        <aside className="card__body">
                                            <h3>{find.title || find.name}</h3>
                                            <p>{find.overview}</p>
                                            <span>{find.media_type}</span>
                                        </aside>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


