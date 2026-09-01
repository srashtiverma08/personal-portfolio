import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Skills = () =>{
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
/*<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;*/
return(
    <section className="skills" id="skills">
        <Container className="cont">
            <Row className="rows">
                <Col>
                    <div className="skills-bx">
                        <h2 className="skill" >
                            Skills
                        </h2>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={""} alt="" />
                                <h5 className="skill-hed">Frontend</h5>
                                <div className="skill-sec">
                                <li className="list-skills"><button className="skill-button">React</button></li>
                                <li className="list-skills"><button className="skill-button">HTML5</button></li>
                                <li className="list-skills"><button className="skill-button">Tailwind</button></li>
                                <li className="list-skills"><button className="skill-button">Bootstrap</button></li>
                                </div>
                            </div>
                            <div className="item">
                                <img src={""} alt="" />
                                <h5 className="skill-hed">Backend</h5>
                                <div className="skill-sec">
                                <li className="list-skills"><button className="skill-button">Node.js</button></li>
                                <li className="list-skills"><button className="skill-button">Python</button></li>
                                <li className="list-skills"><button className="skill-button">Express.js</button></li>
                                </div>
                                
                            </div>
                            <div className="item">
                                <img src={""} alt="" />
                                <h5 className="skill-hed">Database & API Integration</h5>
                                <div className="skill-sec">
                                <li className="list-skills"><button className="skill-button">Mysql</button></li>
                                <li className="list-skills"><button className="skill-button">PostgreSql</button></li>
                                <li className="list-skills"><button className="skill-button">REST API</button></li>
                                </div>
                            </div>
                            <div className="item">
                                <img src={""} alt="" />
                                <h5 className="skill-hed">Tools & Platform</h5>
                                <div className="skill-sec">
                                <li className="list-skills"><button className="skill-button" >Git/Github</button></li>
                                <li className="list-skills"><button className="skill-button">POSTMAN</button></li>
                                <li className="list-skills"><button className="skill-button">Vercel</button></li>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
};