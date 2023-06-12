import { useState } from 'react'
import Story from '../storyCollection/story/story'
import StoryCard from '../storyCollection/storyCard/storyCard'

function App() {
 

  return (
    <>
      <div>
       "Hello" 
      </div>
      <h1>StoryScape</h1>
      <div className="card">
      <Story  />
      <StoryCard />
      </div>
     </>
  )
}

export default App
