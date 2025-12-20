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
            <header>
                <nav className="nav">
                    <Link
                        to={"/"}
                        className="nav__logo"
                        onClick={closeMenu}
                    >
                        LOGO
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

                    {/* SIDEBAR AND MEDIA QUERIES */}
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
                    </menu>
                </nav>
            </header>
            <Outlet />            
        </React.Fragment>
    );
};


