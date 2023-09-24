import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <>
      <Container className='mt-5'  >
      <Row className="justify-content-center text-center">
      <Col>
      <h2 className="font-weight-normal">Bienvenido a Happy Cake</h2>
      <p>El lugar de los pasteles felices</p>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="\src\assets\cake.jpg.png"
      />
    </Figure>
    </Col>
    </Row> 
    </Container>
    </>
  );
};

export default Home