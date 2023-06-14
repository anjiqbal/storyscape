
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

function Search({ setSearchTerm }) {
  //const navigate = useNavigate();
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(input);
    setInput("");

    // navigate("/cardCollection", { state: input });
    //We set the state to input because setSearchTerm has not yet updated the state to include the new input
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
