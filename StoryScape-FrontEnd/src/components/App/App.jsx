import { useState } from 'react'
import Navbar from '../navBar/navBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar />
      </div>
      <h1>This is our APP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     </>
  )
}

export default App
