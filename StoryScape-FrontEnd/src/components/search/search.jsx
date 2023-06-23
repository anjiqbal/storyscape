import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";
import countries from "./countries.jsx";
import supabase from "../../config/supabaseClient";

function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleCountry(e) {
    const searchTerm = e.target.value;
    setInput(searchTerm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection", { state: input });
    props.setSearchTerm(input);
    setInput("");
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/storyCollection", { state: input });
      props.setSearchTerm(input);
      setInput("");
    }
  }


  return (
    <section className="search-section">
      <form onSubmit={handleSubmit}>
        <p className="description search-description">
          Discover stories from around the world
        </p>
        <div id="input-container">
          <select
            className="search-input"
            value={input}
            onChange={handleCountry}
            onKeyDown={handleEnter}
          >
          {/* Placeholder before countries */}
          <option value="" disabled>
          Select a country
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
