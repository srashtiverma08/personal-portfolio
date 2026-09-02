import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const Education = () => {
  return (
    <section className="education" id="education"> 
      <Container className="edu-cont">
        <Row className="g-5" id="edu-row">
            {/* Experience */}
          <Col xs={12} md={6}>
            <h2>Experience</h2>

            <Card className="w-100" id="edu-card">
              <Card.Body>
                <Card.Title>Software Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  4Pillar Global Technologies (May'26 - Jun'26)
                </Card.Subtitle>

                <Card.Text>
                  Worked as a Software Development Intern, contributing to
                  web application development with a focus on backend
                  development, REST APIs, database management, authentication,
                  and Docker-based environments. Gained hands-on experience
                  with Node.js, Express.js, MySQL, JWT, bcrypt, migrations,
                  seeders, QueryBuilder, Docker, Docker Compose, and Postman
                  while working on real-world application workflows and
                  troubleshooting development issues.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Education */}
          <Col xs={12} md={6}>
            <h2>Education</h2>

            <Card className="w-100" id="edu-card">
              <Card.Body>
                <Card.Title>Master's of Computer Application</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Amrapali University (2024-2026)
                </Card.Subtitle>
              </Card.Body>
            </Card>

            <Card className="w-100 mt-4" id="edu-card">
              <Card.Body>
                <Card.Title>Bachelor's of Computer Application</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Kumaun University (2021-2024)
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          

        </Row>
      </Container>
    </section>
  );
};