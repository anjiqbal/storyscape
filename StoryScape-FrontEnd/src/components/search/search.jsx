import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";

function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleInput(input) {
    setInput(input);
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
    <section className="search-section ">
      <form onSubmit={handleSubmit}>
        <p className="description search-description">
          Discover stories from around the world
        </p>
        <div className="input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for a location"
            value={input}
            onChange={(event) => {
              handleInput(event.target.value);
            }}
            onKeyDown={handleEnter}
          />
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
