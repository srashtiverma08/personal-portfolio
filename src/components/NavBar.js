import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import icons8Github from '../assets/icons8-github.svg';
import icon8Linkedin from '../assets/icons8-linkedin.svg';
import logo from '../assets/logo.png';
export const NavBar=()=>{
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled, seScrolled]= useState('false');
    useEffect(()=>{
        const onScroll= ()=>{
            if (window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll)

    }, [])
    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" id="scroll" className={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='projects'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#education" className={activeLink==='experience'?'active navbar-link': 'navbar-link'}onClick={()=>onUpdateActiveLink('experience')}>Experience</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/srashtiverma08"><img src={icons8Github} alt="giticon" /></a>
                <a href="https://www.linkedin.com/in/srashti-verma-403989258"><img src={icon8Linkedin} alt="linkicon" /></a>
            </div>
            <button className="vvd"  onClick={()=>console.log('connect')}><span><a className="connectbut" href="#connect">Let's connect</a></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}