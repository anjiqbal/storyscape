import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";
import countries from "./countries.jsx";

function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    setInput(searchTerm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection", { state: input });
    setSearchTerm(input);
    setInput("");
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/storyCollection", { state: input });
      setSearchTerm(input);
      setInput("");
    }
  }

  return (
    <section className="search-section">
      <form onSubmit={handleSubmit}>
        <p className="description search-description">
          Discover stories from around the world
        </p>
        <div className="input-container">
          <select
            className="search-input"
            value={input}
            onChange={handleSearch}
            onKeyDown={handleEnter}
          >
            <option disabled value="">
              Search for a country
            </option>
            {countries.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default Search;