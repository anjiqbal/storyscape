import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/profileOther");
    //We set the state to input because setPokemonName has not yet updated the state to include the new input
  }
  return (
    <>
      <h1>Welcome to StoryScape</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <section className="form-container">
        <button>Test button</button>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a card" />
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  );
}

export default App;
