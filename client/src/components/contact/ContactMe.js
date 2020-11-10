import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const axios = require("axios");

const API_URL = "http://localhost:5000";

class ContactMe extends React.Component {
    state = {
        name: null,
        email: null,
        message: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleEmail = (event) => {
        let newEmail = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };

        axios
            .post(API_URL + "/email", newEmail)
            .then((res) => {
                if (res.status !== 200) {
                    event.preventDefault();
                }
                console.log("Email sent");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div id="contact">
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
                                email at{" "}
                                <strong>stefanwerleman@yahoo.com</strong> or
                                fill out the form below <br />
                                and I will get back to you as soon as possible.
                            </p>
                        </Col>
                    </Row>

                    <br />

                    <Form onSubmit={this.handleEmail}>
                        <Row className="justify-content-md-center">
                            <Col md="auto" style={{ width: "50%" }}>
                                <Form.Group>
                                    <Form.Control
                                        id="name"
                                        placeholder="Name"
                                        onChange={this.handleChange}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        id="message"
                                        as="textarea"
                                        rows="8"
                                        placeholder="Message"
                                        onChange={this.handleChange}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Form.Group>
                                <Button type="submit" variant="info">
                                    Send
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
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
        paddingBottom: "4.5%",
    },
    mainLine: { borderColor: "#5b9bbc", borderWidth: 5 },
};

export default ContactMe;
