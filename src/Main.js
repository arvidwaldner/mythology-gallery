import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import GreekComponent from "./Greek";
import NorseComponent from "./Norse";
import EgyptianComponent from "./Egyptian";
import HomeComponent from "./Home";




function MainComponent () {
    
              
    return(
        
        <Container>
            <section id="home">
                <HomeComponent />
            </section>
            <section id="greek">
                <GreekComponent />
            </section>
            <section id="norse">
                <NorseComponent />
            </section>
            <section id="egyptian">
                <EgyptianComponent />
            </section>                
        </Container>        
        
    
    
    
    
    );    
}

export default MainComponent;