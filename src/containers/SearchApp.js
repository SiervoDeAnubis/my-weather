import React from "react";
import { Link } from "@reach/router";
import SearchParams from "../components/SearchParams";
import "../search.css";

const SearchApp = () => {
  return (
    <div>
      <header>
        <Link to="/search">Adopt Me!</Link>
      </header>
      <SearchParams />
    </div>
  );
};

export default SearchApp;
