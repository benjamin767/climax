import React from "react";
import Card from "../Card/Card";

export default function CardsContainer({ cities, onClose }) {
    return (
        <>
            {cities && cities.map(city => <Card 
                                            city={city} 
                                            key={city.id} 
                                            onClose={()=>onClose(city.id)}/>)}
        </>
    );
}