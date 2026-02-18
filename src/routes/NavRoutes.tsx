import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Films } from "../pages/films/Films";
import { FilmDetails } from "../pages/films/FilmDetails";
import { TV } from "../pages/tv/TV";
import { TVDetails } from "../pages/tv/TVDetails";
import { People } from "../pages/people/People";
import { Act } from "../components/actor/Act";
import { Favorites } from "../pages/fav/Favorites";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/films",
                element: <Films />
            },
            {
                path: "/films/:id",
                element: <FilmDetails />
            },
            {
                path: "/tv",
                element: <TV />
            },
            {
                path: "/tv/:id",
                element: <TVDetails />
            },
            {
                path: "/people",
                element: <People />
            },
            {
                path: "/people/:id",
                element: <Act />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};




