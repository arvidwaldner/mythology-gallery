import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import ReactDOM from 'react-dom/client';
import { Container, Navbar, Nav } from "react-bootstrap";
import { GenIcon } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWater, faSkull, faVenus, faShield, faChessQueen, faWineGlass} from "@fortawesome/free-solid-svg-icons";
import { useActiveMenu, registerTriggerRef, handleTriggerClick } from "react-active-menu";
import './styles/Navbar.css';





function NavbarComponent(){

    

    return(
        <>
        
            <header className="nav">
                <nav className="nav__container__actions">
                    <ul>
                        <li>
                            <Link activeClass="active" to="greek" spy={true} smooth={true} offset={-70} duration={500}>                   
                                Greek mythology
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="norse" spy={true} smooth={true} offset={-70} duration={500}>                   
                                Norse mythology
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="egyptian" spy={true} smooth={true} offset={-70} duration={500}>                   
                                Egyptian mythology
                            </Link>
                        </li>			        			        
                    </ul>
                </nav>
            </header>    
                
        </>
    
    );    
    
}

export default NavbarComponent;