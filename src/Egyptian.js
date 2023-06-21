import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import zeus from './images/greek gods/Zeus.webp';
import poseidon from './images/greek gods/Poseidon.webp';
import hades from './images/greek gods/Hades.jpg';
import hera from './images/greek gods/Hera.jpg';
import athena from './images/greek gods/Athena.jpg';
import aphrodite from './images/greek gods/Aphrodite.webp';
import dionysos from './images/greek gods/Dionysos.jpg';


import CardComponent from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWater, faSkull, faVenus, faShield, faChessQueen, faWineGlass} from "@fortawesome/free-solid-svg-icons";

function EgyptianComponent(){
    return(
        <Container>
                <Row>
                    <Col sm={2}>
                
                    </Col>
                    <Col sm={8}>
                    <Card>
                        <Card.Body>
                            <h2>Gods and goddesses in Egyptian mythology - coming soon... </h2>
                        </Card.Body>
                    </Card>        
                    </Col>
                    <Col sm={2}>
                
                    </Col>
                </Row>
                <br></br>
            </Container>
    );
}

export default EgyptianComponent;