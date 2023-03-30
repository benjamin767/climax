import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import SearchBar from "../SearchBar/SearchBar";

export default function Home({ onSearch, cities, onClose }) {
   
    return (
        <section className="vh-75">
            <SearchBar onSearch={onSearch}/>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <CardsContainer cities={cities} onClose={onClose}/> 
            </div>
        </section>
    );
}