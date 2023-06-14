import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection");
    setSearchTerm(input);
    setInput("");
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      setSearchTerm(input);
      setInput("");
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a location"
          value={input}
          onChange={(event) => {
            handleInput(event.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Search;

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};