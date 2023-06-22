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
  // async function handleSubmit(event) {
  //     event.preventDefault();

  //     const { data, error } = await supabase
  //       .from("stories")
  //       .select("*")
  //       .eq("story_location", input);

  //     if (error) {
  //       console.error("Error fetching data from Supabase:", error);
  //     } else {
  //       navigate("/storyCollection", { state: data });
  //       setSearchTerm(input);
  //       setInput("");
  //     }
  //   }

  // async function handleEnter(event) {
  //   event.preventDefault();

  //   // const { data, error } = await supabase
  //   //   .from("stories")
  //   //   .select("*")
  //   //   .eq("story_location", input);

  //   // event.preventDefault();

  //   // const { data, error } = await supabase
  //   // .from("stories")
  //   // .select('story_location')
  //   //   .eq("country", input.toLowerCase());

  //   if (error) {
  //     console.error("Error fetching data from Supabase:", error);
  //   } else {
  //     navigate("/storyCollection", { state: data });
  //     setSearchTerm(input);
  //     setInput("");
  //   }
  // }

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
