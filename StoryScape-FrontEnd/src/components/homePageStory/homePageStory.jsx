import { useState, useEffect } from 'react';
import image1 from './images/Story-1.jpg';
import image2 from './images/Story-2.jpg';
import image3 from './images/Story-3.jpg';
import './HomePageStory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const HomePageStory = () => {
  const [story, setStory] = useState({});

  const stories = [
    {
      image: image1,
      paragraph: 'This is the story for image 1.',
    },
    {
      image: image2,
      paragraph: 'This is the story for image 2.',
    },
    {
      image: image3,
      paragraph: 'This is the story for image 3.',
    },
  ];

  useEffect(() => {
    // Generate a random index to select a story
    const randomIndex = Math.floor(Math.random() * stories.length);
    setStory(stories[randomIndex]);
  }, []);

  return (
    <Container className='piccontainer'>
      <img src={story.image} alt="Story" className="image" />
      <p className="text">{story.paragraph}</p>
    </Container>
  );
};

export default HomePageStory;