import { useState } from 'react'
import Navbar from '../navBar/navBar'
import { useNavigate } from "react-router-dom";
import Story from '../storyCollection/story/story'
import StoryCard from '../storyCollection/storyCard/storyCard'
import StoryCollection from '../storyCollection/storyCollection';


function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection");
  }
 

  return (
    <>
      <div>
       <Navbar />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <section className="form-container">
        <button>Test button</button>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a story" />
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  );
}

export default App;
