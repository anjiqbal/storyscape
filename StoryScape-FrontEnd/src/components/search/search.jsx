import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";
import countries from "./countries.jsx";

function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    setInput(searchTerm);
    if (searchTerm.length >= 1) {
      const filtered = countries.filter((country) =>
        country.country.toLowerCase().startsWith(searchTerm)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  }

  function handleSelectChange(e) {
    setInput(e.target.value);
    setFilteredCountries([]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection", { state: input });
    setSearchTerm(input);
    setInput("");
    setFilteredCountries([]);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/storyCollection", { state: input });
      setSearchTerm(input);
      setInput("");
      setFilteredCountries([]);
    }
  }

  return (
    <section className="search-section ">
      <form onSubmit={handleSubmit}>
        <p className="description search-description">
          Discover stories from around the world
        </p>
        <div className="input-container">
          {/* <input
            className="search-input"
            type="text"
            placeholder="Search for a location"
            value={input}
            onChange={handleSearch}
            onKeyDown={handleEnter}
          /> */}
          <select
            className="search-input"
            value={""}
            onChange={handleSelectChange}
            onKeyDown={handleEnter}
          >
            <option disabled value="">
              Search for a country
            </option>
            {filteredCountries.map((country) => (
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

export default Search;

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
