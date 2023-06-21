import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import zeus from './images/greek gods/Zeus.webp';
import poseidon from './images/greek gods/Poseidon.webp';
import hades from './images/greek gods/Hades.jpg';
import hera from './images/greek gods/Hera.jpg';
import athena from './images/greek gods/Athena.jpg';
import aphrodite from './images/greek gods/Aphrodite.webp';


import CardComponent from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWater, faSkull, faVenus, faShield, faChessQueen} from "@fortawesome/free-solid-svg-icons";


function MainComponent () {
    
              
    return(
    <Container>
        
        <Row>
            <Col sm={4}>
                <CardComponent name={"Zeus"} description={"The ruler of Olympos"} imageSrc={zeus} icon={faBolt}></CardComponent>                
            </Col>            
            <Col sm={4}>
                <CardComponent name={"Poseidon"} description={"God of the sea"} imageSrc={poseidon} icon={faWater}></CardComponent>                
            </Col>
            <Col sm={4}>
                <CardComponent name={"Hades"} description={"God of the underworld"} imageSrc={hades} icon={faSkull}></CardComponent>                
            </Col>
        </Row>
        <br></br>    
              
        <Row>
            <Col sm={4}>
                <CardComponent name={"Hera"} description={"Queen of Olympos and goddess of marriage"} imageSrc={hera} icon={faChessQueen}></CardComponent>                
            </Col>
            <Col sm={4}>
                <CardComponent name={"Athena"} description={"Goddess of Athens"} imageSrc={athena} icon={faShield}></CardComponent>                
            </Col>
            <Col sm={4}>
                <CardComponent name={"Aphrodite"} description={"Goddess of love and fertility"} imageSrc={aphrodite} icon={faVenus}></CardComponent>                
            </Col>
        </Row>            
        
    </Container>
    
    
    );    
}

export default MainComponent;