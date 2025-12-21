import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm, IFDetail } from "../models/Interfaces";
const API = import.meta.env.PUBLIC_KEY;
const URL = "https://api.themoviedb.org/3";

export const TMDB = createApi({
    reducerPath: "TMDB",
    tagTypes: ["Films", "TV", "People"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        tfilm: builder.query<IFilm, void>({
            query: () => ({
                url: `/trending/movie/week`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["Films"]
        }),
        fdetail: builder.query<IFDetail, number>({
            query: (id) => ({
                url: `/movie/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "credits"
                }
            }),
            providesTags: ["Films"]
        }),
    })
});




