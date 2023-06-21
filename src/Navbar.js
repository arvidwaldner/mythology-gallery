import React from "react";
import ReactDOM from 'react-dom/client';
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarComponent(){
    return(
    <Container>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" activeClass="active" smooth spy to="home">Mythology Gallery</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#greek" activeClass="active" smooth spy to="greek">Greek</Nav.Link>
                    <Nav.Link href="#norse" activeClass="active" smooth spy to="norse">Norse</Nav.Link>
                    <Nav.Link href="#egyptian" activeClass="active" smooth spy to="egyptian">Egyptian</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </Container>
    );    
}

export default NavbarComponent;