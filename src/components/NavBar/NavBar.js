import React from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar({ onSearch }) {

    return (
        <nav className="navbar-nav bg-dark text-light mb-5">
            <SearchBar onSearch={onSearch}/>
        </nav>
    );
}