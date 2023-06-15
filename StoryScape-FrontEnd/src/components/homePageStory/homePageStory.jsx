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
      title: "A walk in the Park",
      user: "John Doe",
      paragraph: 'We all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great time We all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great timeWe all talk a walk throught the park one day, and it was a great day. The picnic was bountiful the weather was great. We all had a great time.',
    },
    {
      image: image2,
      title: "The Outback, Keepin' low and gettin' Dough.",
      user: "Bubba Gump",
      paragraph: "Well it all started off just outside of Bendigo, Old Bubba was heading on down the line when he encountered the most pecuilar looking thing he ever did see. He bent down to see what it was and to his surprise it was a nugget of gold. He picked it up and said 'Well I'll be, I'm rich!",

    },
    {
      image: image3,
      title: "Hastings, A Battle for the Ages",
      user: "William, T, C.",
      paragraph: 'The battle opened with the Norman archers shooting uphill at the English shield wall, to little effect. The uphill angle meant that the arrows either bounced off the shields of the English or overshot their targets and flew over the top of the hill. The lack of English archers hampered the Norman archers, as there were few English arrows to be gathered up and reused.',
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
      <div className= 'ustorycontainer'> 
      <h2 className='title'>{story.title}</h2>
      <em className="storyUserName"> By: {story.user} </em>
      <p className="text">{story.paragraph}</p>
      </div>
    </Container>
  );
};

export default HomePageStory;