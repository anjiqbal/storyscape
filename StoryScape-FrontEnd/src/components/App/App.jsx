import { useState } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";
import "./app.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const navigate = useNavigate();

  function handleUploadButton(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="card">
        <section className="form-container">
          <Search setSearchTerm={setSearchTerm} />
          <form onSubmit={handleUploadButton}>
            <button type="submit">upload a story</button>
          </form>
        </section>
      </div>
    </>
  );
}
export default App;
