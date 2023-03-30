import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {

    return (
        <nav className="navbar-nav bg-dark text-light mb-5">
            <Link to="/"><h1 className="text-light mx-auto">Climax</h1></Link>
        </nav>
    );
}