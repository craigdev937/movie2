import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <header className="navbar">
                <nav className="nav">
                    <Link
                        to={"/films"}
                        className="nav__logo"
                        onClick={closeMenu}
                    >
                        MEDIA
                    </Link>

                    {/* NAV MENU BUTTON */}
                    <button 
                        className="nav__button"
                        type="button"
                        aria-label="toggle"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside className={`
                            nav__burger ${open ? "open" : ""}
                        `}>
                            <span className="nav__line" />
                            <span className="nav__line" />
                            <span className="nav__line" />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ? 
                        "nav__menu active" : 
                        "nav__menu"
                    }>
                        <li className="nav__item">
                            <Link 
                                to={"/films"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Films
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to={"/tv"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                TV
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to={"/people"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                People
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={"/favorites"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Favorites
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />            
        </React.Fragment>
    );
};


