import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Films } from "../pages/films/Films";
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
            <h1>Footer goes here...</h1>
        </React.Fragment>
    );
};




