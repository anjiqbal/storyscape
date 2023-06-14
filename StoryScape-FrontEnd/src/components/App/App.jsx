import { useEffect, useState } from "react";
import Search from "../search/search";
import UploadForm from '../uploadForm/uploadForm'
import Navbar from '../navBar/navBar'
import { useNavigate } from "react-router-dom";
import Story from '../storyCollection/story/story'
import StoryCard from '../storyCollection/storyCard/storyCard'
import StoryCollection from '../storyCollection/storyCollection';
import "./app.css";



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/storyCollection");
  }
  
   function upload(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }
 

  return (
    <>
      <div className="navbar">
       <Navbar />
    <Search setSearchTerm={setSearchTerm} />
      </div>
      <div className="card">
         <section className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search for a story" />
          <button type="submit">Search</button>
        </form>
      </section>
 <section className="form-container">
        <form onSubmit={upload}>
          <button type="submit">upload a story</button>
        </form>
      </section>
      </div>

    </>
  );
}
export default App;
