import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Films } from "../pages/films/Films";
import { FilmDetails } from "../pages/films/FilmDetails";
import { TV } from "../pages/tv/TV";
import { People } from "../pages/people/People";

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
                path: "/people",
                element: <People />
            }
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




