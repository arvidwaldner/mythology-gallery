import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import GreekComponent from "./Greek";
import NorseComponent from "./Norse";
import EgyptianComponent from "./Egyptian";
import HomeComponent from "./Home";




function MainComponent () {
    
              
    return(
        <>
        <div className="greek">
            <Container>
                <Container>
                    <section id="home">
                        <HomeComponent />
                    </section>
                </Container>
                <Container>
                    <section id="greek">
                        <GreekComponent />
                    </section>    
                </Container>
                <Container>
                    <section id="norse">
                        <NorseComponent />
                    </section>    
                </Container>
                <Container>
                    <section id="egyptian">
                        <EgyptianComponent />
                    </section>    
                </Container>                            
            </Container>
        </div>        
        </>
    
    
    
    
    );    
}

export default MainComponent;