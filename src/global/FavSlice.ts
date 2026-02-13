import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFDetail, IFav } from "../models/Interfaces";

const initialState: IFav = {
    favorites: localStorage.getItem("favItems") ?
        JSON.parse(localStorage.getItem("favItems")
    || "") : []
};

const FavSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<IFDetail>) => {
            const FAV = state.favorites.find(
                (fav) => fav.id === action.payload.id);
            if (!FAV) {
                state.favorites.push(action.payload);
                localStorage.setItem("favItems", 
                JSON.stringify(state.favorites));
            };
        },
        sub: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(
                (fav) => fav.id !== action.payload);
            localStorage.setItem("favItems", 
                JSON.stringify(state.favorites));
        },
        clear: (state) => {
            state.favorites = [];
            localStorage.setItem("favItems", 
                JSON.stringify(state.favorites));
        }
    }
});

export const ACT = FavSlice.actions;
export const FavReducer = FavSlice.reducer;



