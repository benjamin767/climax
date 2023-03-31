import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

export default function Home({ onSearch, cities, onClose }) {

    return (
        <section className="vh-75">
            <SearchBar onSearch={onSearch} />
            <div className="d-flex flex-row justify-content-center flex-wrap">
                {cities.length
                    ? <CardsContainer cities={cities} onClose={onClose} />
                    : <Spinner />}
            </div>
        </section>
    );
}