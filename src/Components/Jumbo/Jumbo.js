import Carousel from 'react-bootstrap/Carousel';
import myImage from '../images/myImage.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import { Container } from 'react-bootstrap';
import s4 from '../images/s4.jpg'

function Jumbo(props) {
  return (
    <Container id='Jumbo' className='carsoule w-80'>
        <Carousel variant="dark">
      <Carousel.Item interval={200}>
        <img
          className="d-block w-100"
          src={s4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{props.pname}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={s4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>{props.pname}</h1>
          <p>{props.pdesc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Number of Users</h5>
          <h4>{props.puser}</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    
  );
}

export default Jumbo;