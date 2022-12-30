import React, {useState}  from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState("");
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
            }} className="mx-auto">
                <input
                type="text" 
                value={city}
                placeholder="City..."
                onChange={(e) => setCity(e.target.value)}
                />
                <input type="submit" value="Search"/>
            </form>
        </>
    );
}