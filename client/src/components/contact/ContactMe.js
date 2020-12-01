import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./ContactMe.css";

const axios = require("axios");

const API_URL = "http://localhost:5000";

class ContactMe extends React.Component {
    handleEmail = (event) => {
        let newEmail = {
            name: event.name,
            email: event.email,
            message: event.message,
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

    schema = Yup.object({
        name: Yup.string().required("Please provide a name."),
        email: Yup.string().required("Please provide a valid email address."),
        message: Yup.string().required("Please provide a message."),
    });

    emailForm = () => (
        <Formik
            validationSchema={this.schema}
            onSubmit={this.handleEmail}
            initialValues={{}}
        >
            {({ handleSubmit, errors, handleChange }) => (
                <Form id="form-container" onSubmit={handleSubmit} noValidate>
                    <Form.Row>
                        <Form.Group id="name-group" as={Col}>
                            <Form.Control
                                id="name-input"
                                type="text"
                                placeholder="Name"
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group id="email-group" as={Col}>
                            <Form.Control
                                id="email-input"
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group id="message-group" as={Col}>
                            <Form.Control
                                id="message-input"
                                as="textarea"
                                rows="8"
                                placeholder="Message"
                                onChange={handleChange}
                                isInvalid={!!errors.message}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row
                        id="button-row"
                        className="justify-content-md-center"
                    >
                        <Form.Group>
                            <Button
                                id="send-button"
                                type="submit"
                                variant="info"
                            >
                                Send
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            )}
        </Formik>
    );

    render() {
        return (
            <div id="contact">
                <Container id="contact-container" fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="contact-title" className="display-4">
                                Contact Me
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="contact-text">
                                If you are interested or looking for a Software
                                Engineer for an internship position. Drop me an
                                email at{" "}
                                <a
                                    id="email-link"
                                    href="mailto:stefanwerleman@yahoo.com"
                                    style={{ color: "#5b9bbc" }}
                                >
                                    <strong>stefanwerleman@yahoo.com</strong>
                                </a>{" "}
                                or fill out the form below and I will get back
                                to you as soon as possible.
                            </p>
                        </Col>
                    </Row>

                    <br />
                    <Row id="email-row" className="justify-content-md-center">
                        {this.emailForm()}
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    mainLine: { borderColor: "#5b9bbc", borderWidth: 5 },
};

export default ContactMe;
