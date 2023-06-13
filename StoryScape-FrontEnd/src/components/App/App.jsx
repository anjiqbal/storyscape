import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Story from '../storyCollection/story/story'
import StoryCard from '../storyCollection/storyCard/storyCard'
import StoryCollection from '../storyCollection/storyCollection';

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/profileOther");
    //We set the state to input because setPokemonName has not yet updated the state to include the new input
  }
 

  return (
    <>
      <div>
      Hello
      </div>
      <h1>StoryScape</h1>
      <Story  />
      <StoryCard />
      <StoryCollection />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
        <section className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a card"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
      
        />
        <button type="submit">Search</button>
      </form>
    </section>
      
     </>
  )
}

export default App
