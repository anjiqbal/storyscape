import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./NotFound.css"

function NotFound() {
        const navigate = useNavigate()
        useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 4000)    
        }, [])

  return (
    <>
    <div className="error-div">
    <h1>Well we didn't expect the story to end like this.</h1>
    <br/>
    <h3>So let's get you back on track. 
    <br /> <br />
    Please wait while we re-direct you home..</h3>
    
     </div>

    </>
  )
}

export default NotFound