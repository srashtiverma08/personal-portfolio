import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";

export const Contact = ()=>{
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails]= useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] =  useState({});

    const onFormUpdate=(category, value)=>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    const result = await response.json();

    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully",
      });
      setFormDetails(formInitialDetails);
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  } finally {
    setButtonText("Send");
  }
};
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="row-connect">
                    <Col md={6} >
                        <h2>Contact Details</h2>
                        <h4><button>Name: Srashti Verma</button></h4>
                        <h4><button>Phone: +91 8923416250</button></h4>
                        <h4><button>Email: srashtiverma08@gmail.com</button></h4>
                        <h4><button>Location: Kashipur, Uttarakhand</button></h4>
                    
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" required onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" required onChange={(e)=> onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" required onChange={(e)=> onFormUpdate('email', e.target.value)} />
                                </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." required onChange={(e)=> onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col  className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" required onChange={(e)=> onFormUpdate('message', e.target.value)} ></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger": "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}