import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const Projects = () => {
  return (
    <section className="proj-sec" id="project">
      <Container className="proj-cont">
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
          </Col>
        </Row>

        <Row className="g-5" id="card-row">
          <Col xs={12} sm={6} md={6}>
            <Card className="h-100 w-100" id="cardd">
              <Card.Body>
                <Card.Title>Quiz Management System</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Dec 2025 - Jan 2026
                </Card.Subtitle>
                <Card.Text>
                  A web-based quiz platform designed to create, manage, and conduct online quizzes efficiently. It allows administrators to manage questions and quizzes, while users can attempt quizzes and view their results. The system provides a simple and user-friendly interface for smooth quiz management.
                </Card.Text>
                <Card.Footer>Tech Used: Php, MySql, JavaScript, HTML5, CSS3, Bootstrap</Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card className="h-100 w-100" id="cardd">
              <Card.Body>
                <Card.Title>Litigation Management System</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Mar 2026 - june 2026
                </Card.Subtitle>
                <Card.Text>
                  Developed and worked on RESTful APIs for a litigation management system, including authentication, user management, case-related data, and API testing. Worked with Node.js, Express.js, MySQL, JWT authentication, migrations, and database integration.
                </Card.Text>
                <Card.Footer>Tech Used: REST APIs, NOde.js</Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};