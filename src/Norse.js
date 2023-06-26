import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import odin from './images/norse gods/Odin.jpg';
import thor from './images/norse gods/Thor.jpg';
import loki from './images/norse gods/Loki.jpg';
import freya from './images/norse gods/Freya.jpg';
import sif from './images/norse gods/Sif.webp';
import hel from './images/norse gods/Hel.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


import CardComponent from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn, faFaceGrinTongueSquint, faChessKing, faHammer, faVenus, faSkull} from "@fortawesome/free-solid-svg-icons";

function NorseComponent(){
    return(
        <>
            <Container>
                <Row>
                    <Col sm={2}>
                
                    </Col>
                    <Col sm={8}>
                        <Card>
                            <Card.Body>
                                <AnimationOnScroll animateIn='animate__slideInDown' animatePreScroll={false} duration={2}>
                                    <h3 style={{textAlign: 'center', fontFamily: 'Italic'}}>Gods and goddesses in Norse mythology</h3>
                                </AnimationOnScroll>
                            </Card.Body>
                        </Card>      
                    </Col>
                    <Col sm={2}>
                
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Odin"} description={"The ruler of Asgard and the allfather"} imageSrc={odin} icon={faChessKing}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <br></br>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Thor"} description={"The god of Thunder"} imageSrc={thor} icon={faHammer}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <br></br>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Loki"} description={"The trickster and the manipulator"} imageSrc={loki} icon={faFaceGrinTongueSquint}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Freya"} description={"The goddess of love and fertility"} imageSrc={freya} icon={faVenus}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Sif"} description={"The goddess of harvest"} imageSrc={sif} icon={faWheatAwn}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                    <Col sm={4}>
                        <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={false} duration={2}>
                            <CardComponent name={"Hel"} description={"The goddess of the underworld"} imageSrc={hel} icon={faSkull}></CardComponent>
                        </AnimationOnScroll>
                    </Col>
                </Row>

            </Container>
        
        </>
    );
}

export default NorseComponent;