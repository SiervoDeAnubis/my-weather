import React from "react";
import { Link } from "@reach/router";
import "./search.css";

const SearchParams = () => {
  const location = "Seatle, WA";
  return (
    <div>
      <header>
        <Link to="/search">Adopt Me!</Link>
      </header>
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location:
            <input
              id="location"
              value={location}
              type="text"
              onChange={e => console.log(e.target.value)}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchParams;
