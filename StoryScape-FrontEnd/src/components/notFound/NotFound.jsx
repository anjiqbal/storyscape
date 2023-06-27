import { useNavigate } from "react-router-dom"

import { useEffect } from "react"

function NotFound() {
        const navigate = useNavigate()
        useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 4000)    
        }, [])

  return (
    <div>
    <h1>Well we didn't expect the story to end like this.</h1>
    <h3>So let's get you back on track. Please wait while we redirect you home</h3>
    


     </div>
  )
}

export default NotFound