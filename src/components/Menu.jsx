import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";
import { faCake, faHouse, faBook } from '@fortawesome/free-solid-svg-icons'
import { Icon } from './Icon';

const Menu = () => {
  return (
    <>
      <>
        <Navbar bg="danger" variant="dark">
          <Container className="container-fluid">
            <div>
              <Link to="/" className="text-white ms-3 text-decoration-none">
                <Icon css='icon' icon={faHouse} />
                Home
              </Link>
              <Link to="/contact" className="text-white ms-3 text-decoration-none">
                <Icon css='icon' icon={faBook} />
                Contact
              </Link>
            </div>
            <div> <a className="navbar-brand navbar-logo" href="#">Happy Cake</a>
              <Icon css='icon' icon={faCake} /></div>
          </Container>

        </Navbar>
      </>
    </>
  )
}

export default Menu