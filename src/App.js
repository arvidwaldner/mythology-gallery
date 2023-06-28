import logo from './logo.svg';
import './styles/App.css';
import NavbarComponent from './Navbar';
import MainComponent from './Main';
import Footer from './Footer';
import { useActiveMenu } from "react-active-menu";
import React, { useEffect, useRef } from "react";
import { Container } from 'react-bootstrap';



function App() {
  


  return (
    <>
      <div className='main'>
        <NavbarComponent />  
                            
        <MainComponent />

        <Container>
          <section id="footer-myth-gallery">
            <Footer />
          </section>  
        </Container>                                
      </div>         
    

    </>
  );
}

export default App;
