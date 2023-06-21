import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './problemStatement.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function problemStatement() {
  return (
   <Container className= 'probs'>
   <h1>StoryScape</h1>
    <h2>As humans, we go through different life experiences and we all have a story to tell. For example, the elderly have lived through wars and conflict, and may not have a platform to express their stories. When they pass away, so do these stories, never to be heard again. 
        This app will allow them to share their unique, personal stories, which may inspire the youth and others.</h2>
    </Container>
  )
}
