import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import ReactDOM from 'react-dom/client';
import { Container, Navbar, Nav } from "react-bootstrap";
import { GenIcon } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun} from "@fortawesome/free-solid-svg-icons";
import { useActiveMenu, registerTriggerRef, handleTriggerClick } from "react-active-menu";
import './styles/Navbar.css';





function NavbarComponent(){

    const [Open, setOpen] = useState(false);
    const[sticky, setSticky]=useState();

    useEffect(()=>{
        const handleScroll=()=>setSticky(window.scrollY>200)
        console.log(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return()=> window.removeEventListener('scroll', handleScroll)
      })

    return(
        <>
        <nav className={`${sticky ? "sticky" : ""}`}>
            <div className="Navbar">
                <span className='nav-logo'>
                    <h2>Mythology Gallery</h2>
                </span>
                <div className={`nav-items ${Open && "open"}`}>
                    <a>
                        <Link activeClass="active" to="greek" spy={true} smooth={true} offset={-70} duration={500}>                 
                            Greek mythology
                        </Link>
                    </a>
                    <a>
                        <Link activeClass="active" to="norse" spy={true} smooth={true} offset={-70} duration={500}>                   
                            Norse mythology
                        </Link>    
                    </a>
                    <a>
                        <Link activeClass="active" to="egyptian" spy={true} smooth={true} offset={-70} duration={500}>                   
                            Egyptian mythology
                        </Link>    
                    </a>                    
                </div>
                <div className={`nav-toggle ${Open && "open"}`} onClick={() => setOpen(!Open)}>
                    <div className="bar">

                    </div>
                </div>
            </div>
        </nav>        
                
        </>
    
    );    
    
}

export default NavbarComponent;