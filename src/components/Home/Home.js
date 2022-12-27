import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import NavBar from "../NavBar/NavBar";

export default function Home({ onSearch, cities }) {
   
    return (
        <>
            <NavBar onSearch={onSearch} />
            <h1>Climax</h1>
            <div><CardsContainer cities={cities} /></div>
        </>
    );
}