import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
  return (
    <>
       <Container className='mt-5'  >
      <Row className="justify-content-center text-center">
      <Col>
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
      <Button  className="btn btn-danger" >Enviar</Button>
      </Col>
    </Row> 
    </Container>
    </>
  )
}

export default Contact