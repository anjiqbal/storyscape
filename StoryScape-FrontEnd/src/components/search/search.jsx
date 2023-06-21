import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import PropTypes from "prop-types";
import countries from "./countries.jsx"

function Search({ setSearchTerm }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  // function handleInput(input) {
  //   setInput(input);
  // }

  //create a handleSearch function that will take in the event and loop through the countries array to find the country that matches the input
  //if the country matches the input, then set the searchTerm to the country name
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if(/\d/.test(searchTerm)){
      setInput(searchTerm);
    }
    else{
      setInput(e.target.value);
    }
    for (let i = 0; i < countries.length; i++) {
      if ( e.target.value.toLowerCase() === countries[i].country) {
        setInput(() => countries[i].country);
      }
      console.log(e.target.value)
    }
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
            onChange={handleSearch}
            // onChange={(event) => {
            //   handleInput(event.target.value);
            // }}
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
