import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import NavBar from "../NavBar/NavBar";

export default function Home({ onSearch, cities, onClose }) {
   
    return (
        <>
            <NavBar onSearch={onSearch} />
            <h1 className="text-light">Climax</h1>
            <div><CardsContainer cities={cities} onClose={onClose}/></div>
        </>
    );
}