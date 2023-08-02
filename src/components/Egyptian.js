import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import CardComponent from "./Card";
import osiris from '../images/egyptian gods/Osiris.jpg';
import anubis from '../images/egyptian gods/Anubis.jpg';
import horus from '../images/egyptian gods/Horus.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWheatAwn, faFaceGrinTongueSquint, faChessKing, faHammer, faVenus, faSkull, faAnkh, faShieldDog, faCrow} from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function EgyptianComponent(){
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
                                        <h3 style={{textAlign: 'center', fontFamily: 'Italic'}}>Gods and goddesses in Egyptian mythology</h3>                                    
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
                            <CardComponent name={"Osiris"} description={"God of fertility, agriculture, the afterlife, the dead, resurrection, life, and vegetation"} imageSrc={osiris} icon={faAnkh}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <br></br>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Anubis"} description={"God of funerary rites, protector of graves, and guide to the underworld"} imageSrc={anubis} icon={faShieldDog}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <br></br>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Horus"} description={"God of kingship, healing, protection, the sun and the sky"} imageSrc={horus} icon={faCrow}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                </Row>                             

            </Container>           
        
        </>
    );
}

export default EgyptianComponent;