import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css"

export default function Home({ onSearch, cities, onClose }) {
   
    return (
        <>
            <SearchBar onSearch={onSearch}/>
            <div className="home_container">
                <CardsContainer cities={cities} onClose={onClose}/> 
            </div>
        </>
    );
}