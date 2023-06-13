import { useState } from 'react'
import Story from '../storyCollection/story/story'
import StoryCard from '../storyCollection/storyCard/storyCard'

function App() {
 

  return (
    <>
    <h1>StoryScape</h1>
    <h2>Preserve,Share,Inspire: Your Past, Our Future</h2>
      <div className="card">
      <Story  />
      <StoryCard />
      </div>
     </>
  )
}

export default App
