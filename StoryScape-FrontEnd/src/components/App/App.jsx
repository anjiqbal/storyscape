import { useState } from 'react'
import UploadForm from '../uploadForm/uploadForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       "Hello" 
      </div>
      <h1>This is our APP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <UploadForm />
     </>
  )
}

export default App
