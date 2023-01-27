import React, {useState}  from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState("");
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
            }}>
                <div className="input-group mb-3 mx-auto">
                    <input className="form-control"
                    type="text" 
                    value={city}
                    placeholder="City..."
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <input className="btn btn-primary input-group-text" type="submit" value="Buscar"/>
                </div>
            </form>
        </div>
    );
}