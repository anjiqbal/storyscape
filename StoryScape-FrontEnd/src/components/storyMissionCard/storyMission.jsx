import 'bootstrap/dist/css/bootstrap.min.css';
import './storymission.css';
import Container from 'react-bootstrap/Container';
import logo from './System_32_Logo-removebg_HD.png'


function storyMission() {
  return (
    <Container className='mission-container'>
    <h1>Connecting the world through our life stories and experiences</h1>
    <img className='mission-image' src={logo} alt=''/>
    </Container>
  )
}

export default storyMission