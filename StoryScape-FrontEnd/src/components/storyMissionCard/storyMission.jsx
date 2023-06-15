import 'bootstrap/dist/css/bootstrap.min.css';
import './storymission.css';
import Container from 'react-bootstrap/Container';

function storyMission() {
  return (
    <Container className='mission-container'>
    <image />
    <h4>Our Mission</h4>
    <p>To connect the world through our experiences</p>
    <p>Create a vibrant tapestry with your memories saved for generation after 
generation. 
</p>
    <p><a href=''>Click here</a> to find out more</p>
    <p>Sincerely,<br />
    The StoryScape Team</p>
    <p className='slogan-signoff'>Your past, Our future</p>
    </Container>
  )
}

export default storyMission