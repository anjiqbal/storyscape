import 'bootstrap/dist/css/bootstrap.min.css';
import './storymission.css';
import Container from 'react-bootstrap/Container';


function storyMission() {
  return (
    <Container className='mission-container'>
    <img className='mission-image' src='' alt=''/>
    <h4 className='mission-title'>Our Mission</h4>
    <p className='mission-line-1'>To connect the world through our experiences</p>
    <p className='mission-line-2'>Create a vibrant tapestry with your memories saved for generation after 
generation. 
</p>
    <p className='mission-line-3'><a href=''> Click here</a>&nbsp; to find out more</p>
    <p className='mission-line-4'>Sincerely,<br />
    The StoryScape Team</p>
    <p className='slogan-signoff'>Your past, Our future</p>
    </Container>
  )
}

export default storyMission