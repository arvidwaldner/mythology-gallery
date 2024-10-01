import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import GreekComponent from "./Greek";
import NorseComponent from "./Norse";
import EgyptianComponent from "./Egyptian";
import { useActiveMenu, registerSection, registerContainer, registerSectionRef } from "react-active-menu";

function MainComponent () {    
                 
    return(
        <>
        
            <Container>
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
        </>           
     );    
}

export default MainComponent;