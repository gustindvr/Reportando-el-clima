import {Container,Row, Col } from 'react-bootstrap';

import './Header.css';

const Header = () => {
  return ( 
    <Container>
      <Row >
        <Col sm={3} className='m-0 p-0'>
          <div className='tormenta clima'></div>
          <div className='spanTitle'>El</div>
        </Col>
        <Col sm={3} className='m-0 p-0'>
          <div className='lluvia clima'></div>
          <div className='spanTitle'>Clima</div>
        </Col>
        <Col sm={3} className='m-0 p-0'>
          <div className='playa clima'></div>
          <div className='spanTitle'>Del</div>
        </Col>
        <Col sm={3} className='m-0 p-0'>
          <div className='nieve clima'></div>
          <div className='spanTitle'>Mundo</div>
        </Col>
      </Row>
    </Container>
   );
}
 
export default Header;