import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import zeus from './images/greek gods/Zeus.webp';
import poseidon from './images/greek gods/Poseidon.webp';
import hades from './images/greek gods/Hades.jpg';
import hera from './images/greek gods/Hera.jpg';
import athena from './images/greek gods/Athena.jpg';
import aphrodite from './images/greek gods/Aphrodite.webp';
import dionysos from './images/greek gods/Dionysos.jpg';

function HomeComponent(){
    return(
        <>
         <Container>
           <br></br>
           <br></br>
           <br></br>            
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={aphrodite}
                    alt="First slide"
                    width={400}
                    height={800}
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={dionysos}
                            alt="Second slide"
                            width={400}
                            height={800}
                        />
                    <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hades}
                    alt="Third slide"
                    width={500}
                    height={800}
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
        </Container>        
        </>       
        
    )
}

export default HomeComponent;