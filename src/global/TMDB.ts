import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IActor, ITV, IFilm, IFDetail, 
    ITVDetails, IAInfo } from "../models/Interfaces";
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
        ttv: builder.query<ITV, void>({
            query: () => ({
                url: "/trending/tv/week",
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["TV"]
        }),
        tdetail: builder.query<ITVDetails, number>({
            query: (id) => ({
                url: `/tv/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "credits"
                }
            }),
            providesTags: ["TV"]
        }),
        act: builder.query<IActor, number>({
            query: (id) => ({
                url: `/person/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "movie_credits,tv_credits"
                }
            }),
            providesTags: ["People"]
        }),
        ainfo: builder.query<IAInfo, number>({
            query: (id) => ({
                url: `/person/${id}`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["People"]
        }),
    })
});




