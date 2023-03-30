import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {

    return (
        <nav className="navbar-nav bg-dark text-light mb-5">
            <Link 
                to="/"
                className="text-decoration-none mx-auto"
            >
                <h1>Climax</h1>
            </Link>
        </nav>
    );
}