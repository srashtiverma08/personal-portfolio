import { Container, Row, Col } from "react-bootstrap";
import  icons8github  from "../assets/icons8-github.svg";
import  icons8linkedin  from "../assets/icons8-linkedin.svg";
import logo from "../assets/logo.png";
export const Footer = ()=>{
    return (
        <footer className="footer">
            <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="logo" className="logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://github.com/srashtiverma08"><img src={icons8github} alt="giticon" /></a>
                        <a href="https://www.linkedin.com/in/srashti-verma-403989258?utm_source=share_via&utm_content=profile&utm_medium=member_android"><img src={icons8linkedin} alt="linkicon"/></a>
                        
                    </div>
                    <p>CopyRight 2026. All Right Reserved. Created with Clean Code.</p>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}