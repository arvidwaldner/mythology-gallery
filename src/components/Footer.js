import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTriangleExclamation, faPersonDigging} from "@fortawesome/free-solid-svg-icons";

function Footer(){

    return(
        <>
            
            <Container>
                <Container>
                    <Row>
                        <Col sm="4">
                            <span className="small"><h5 className="footerText"><FontAwesomeIcon icon={faCode} bounce /> Mythology Gallery - a React beginners project</h5></span> 
                        </Col>
                        <Col sm="4">
                            <span className="small"><h5 className="footerText"><FontAwesomeIcon icon={faPersonDigging} bounce /> Work in progress since june 2023</h5></span>  
                        </Col>
                        <Col sm="4">
                            <span className="small"><p className="footerText"><FontAwesomeIcon icon={faTriangleExclamation} bounce/> I do NOT own the images displayed and I take no credit for them.</p></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">                            
                                                       
                        </Col>
                        <Col sm="6">                           
                                                    
                        </Col>                        
                    </Row>                    
                </Container>                    
            </Container>                        
        </>

    );
} 
export default Footer