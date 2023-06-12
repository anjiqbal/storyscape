import { useEffect, useState } from "react";
import Search from "../search/search";

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  

  return (
    <>
      <div>"Hello"</div>
      <Search setSearchTerm={setSearchTerm} />
      <h1>This is our APP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
