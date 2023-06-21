import React from "react";
import ReactDOM from 'react-dom/client';
import { Container, Navbar } from "react-bootstrap";

function NavbarComponent(){
    return(
    <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Mythology Gallery</Navbar.Brand>
            </Container>
        </Navbar>
    </Container>
    );    
}

export default NavbarComponent;