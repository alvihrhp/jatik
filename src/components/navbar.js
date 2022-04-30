import * as React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// markup
const MenuBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <StaticImage
            alt="Jatik.id Logo"
            src="../images/jatik.png"
            className="brand-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" activeClassName="active">Home</Link>
            <Link to="/about-us" activeClassName="active">About Us</Link>
            <Link to="/product-services" activeClassName="active">Product & services</Link>
            <Link to="/our-partners" activeClassName="active">Our Partners</Link>
            <Link to="/certificates" activeClassName="active">Certificates</Link>
            <Link to="/events" activeClassName="active">Events</Link>
            <Link to="/contacts" activeClassName="active">Contacts</Link>
            <Link to="/contacts" className="btn-solid">Send Inquiry</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuBar