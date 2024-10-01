import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import zeus from '../images/greek gods/Zeus.webp';
import poseidon from '../images/greek gods/Poseidon.webp';
import hades from '../images/greek gods/Hades.jpg';
import hera from '../images/greek gods/Hera.jpg';
import athena from '../images/greek gods/Athena.jpg';
import aphrodite from '../images/greek gods/Aphrodite.webp';
import dionysos from '../images/greek gods/Dionysos.jpg';
import { fadeInDown } from "react-animations";
import styled, {keyframes} from 'styled-components';

import CardComponent from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWater, faSkull, faVenus, faShield, faChessQueen, faWineGlass} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/index.css";

function GreekComponent(){
    
    return(
        <>
        <Container>
                <br></br>                
                <Row>
                    <Col sm={2}>
                    
                    </Col>
                    <Col sm={8}>
                        <AnimationOnScroll animateIn='animate__slideInDown' animatePreScroll={true} duration={1}>                        
                            <Card>
                                <Card.Body>
                                    <h3 style={{textAlign: 'center', fontFamily: 'Italic'}}>Gods and goddesses in Greek mythology</h3>                                 
                                </Card.Body>                                                    
                            </Card>
                        </AnimationOnScroll>                                                   
                    </Col>
                    <Col sm={2}>
                    
                    </Col>
                </Row>
                <br></br>            
                <Row>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Zeus"} description={"The ruler of Mount Olympos and god of thunder and lightning"} imageSrc={zeus} icon={faBolt}></CardComponent>
                        </AnimationOnScroll>                         
                                            
                    </Col>            
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Poseidon"} description={"God of the sea and horses"} imageSrc={poseidon} icon={faWater}></CardComponent>
                        </AnimationOnScroll>                                   
                    </Col>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Hades"} description={"God of the underworld"} imageSrc={hades} icon={faSkull}></CardComponent>
                        </AnimationOnScroll>                
                    </Col>
                </Row>
                <br></br>   
                <Row>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Hera"} description={"Queen of Mount Olympos and goddess of marriage"} imageSrc={hera} icon={faChessQueen}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Athena"} description={"Goddess of wisdom, warfare, and handicraft"} imageSrc={athena} icon={faShield}></CardComponent>
                        </AnimationOnScroll>                                    
                    </Col>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Aphrodite"} description={"Goddess of love and fertility"} imageSrc={aphrodite} icon={faVenus}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                </Row>            
                <br></br>        
                <Row>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Dionysos"} description={"God of wine, festivities, insanity, ritual madness, religious ecstasy, and theatre"} imageSrc={dionysos} icon={faWineGlass}></CardComponent>
                        </AnimationOnScroll>                                    
                    </Col>
                    <Col sm={4}>
                                    
                    </Col>
                    <Col sm={4}>
                                    
                    </Col>
                </Row>                           
        </Container>        
        </>       
        );
}

export default GreekComponent;