import 'bootstrap/dist/css/bootstrap.min.css';
import './storymission.css';
import Container from 'react-bootstrap/Container';
import logo from './System_32_Logo-removebg_HD.png'


function storyMission() {
  return (
    <Container className='mission-container'>
    <img className='mission-image' src={logo} alt=''/>
    <h4 className='mission-title'>Our Mission</h4>
    <p className='mission-line-1'>To connect the world through our experiences <br />
    Create a vibrant tapestry with your memories saved for generation after generation. <br/></p>
    <p className='mission-line-2'>
    <a href=''> Click here</a>&nbsp; to find out more</p>
    <p className='mission-line-3'>Sincerely,<br />
    The StoryScape Team</p>
    <p className='slogan-signoff'>Your past, Our future</p>
    </Container>
  )
}

export default storyMission