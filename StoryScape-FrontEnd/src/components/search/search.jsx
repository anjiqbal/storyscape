import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";



function Search({ setSearchTerm, showDescription, isFooter }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleContinent(e) {
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
    <section className={`search-section ${isFooter ? "footer-search-section" : ""}`}>
      <form onSubmit={handleSubmit}>
        {showDescription && (
          <p className="description search-description">
            Discover stories from around the world
          </p>
        )}
        <div id="input-container">
          <select
            className="search-input"
            value={input}
            onChange={handleContinent}
            onKeyDown={handleEnter}
          >
           <option value="">Search for a continent</option> {/* Default empty option */}
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
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
  showDescription: PropTypes.bool.isRequired,
  isFooter: PropTypes.bool.isRequired,
};

export default Search;

