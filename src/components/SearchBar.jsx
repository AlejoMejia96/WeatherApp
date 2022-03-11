import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="ingre"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className= "btn2" type="submit" value="Search & Add" />
    </form>
  );
}
