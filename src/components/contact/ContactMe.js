import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class ContactMe extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Contact Me</p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                If you are interested or looking for a Software
                                Engineer for an internship position. Drop me an
                                email at stefanwerleman@yahoo.com or fill out
                                the form below <br />
                                and I will get back to you as soon as possible.
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md="auto" style={{ width: "50%" }}>
                            <Form>
                                <Form.Group>
                                    <Form.Control placeholder="Name"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        placeholder="Message"
                                    ></Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Button type="submit" variant="info">
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "#0d2c5a",
        color: "white",
        paddingTop: "5.20%",
        paddingBottom: "3.5%",
    },
    mainLine: { borderColor: "#5b9bbc", borderWidth: 5 },
};

export default ContactMe;
