import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWater, faSkull, faVenus, faShield, faChessQueen, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import ContentModal from "./ContentModal";
import { slideInDown, fadeInDown } from "react-animations";

function CardComponent({name, imageSrc, description, icon}){
    
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState("");
    const [modalBody, setModalBody] = React.useState("");
    const [modalImageSrc, setModalImageSrc] = React.useState("");

         

    
    return(
    
        <>
        
            <Card>
                <Card.Img variant="top" src={imageSrc} width={500} height={500} />
                <Card.Body>
                    <Card.Title>
                        <div className="d-grid gap-2">
                            <Button variant="outline-secondary" size="lg" onClick={() => {setModalShow(true); setModalTitle(name); setModalBody(description); setModalImageSrc({imageSrc})}}><FontAwesomeIcon icon={icon} beatFade/> {name}</Button>    
                        </div>                            
                    </Card.Title>                        
                </Card.Body>
            </Card>
            <br></br>
            <ContentModal show={modalShow} title={modalTitle} body={modalBody} image={modalImageSrc} onHide={() => {setModalShow(false); setModalTitle(""); setModalBody(""); setModalImageSrc("")}} />
        
        </>
        

    );
}

export default CardComponent;
