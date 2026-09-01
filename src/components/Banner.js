import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../assets/banner2.jpg";
import arrow from "../assets/icons8-arrow1.png";
//import {ArrowRightCircle} from "react-bootstrap-icons";
export const Banner = ()=>{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" id="bannerimg">
                    <Col xs={12} md={6} xl={7}>
                        <span className="togline">Welcome to my portfolio</span>
                        <h1>{"Hi, I 'm Srashti Verma "}<span className="wrap">{text}</span></h1>
                        <p>Passionate Software Developer focused on building modern, responsive, and user-friendly web applications. Skilled in frontend and backend development with a strong interest in creating efficient digital solutions, solving real-world problems, and continuously learning new technologies.
</p>
                        <button onClick={()=> console.log('connect')}>Let's Connect <span><a href="#skills"><img className="arrow" src={arrow} alt="" /></a></span></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img className="profileimg" src={banner} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}