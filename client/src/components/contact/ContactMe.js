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
                                id="name"
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
                                id="email"
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
                                id="message"
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
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Button type="submit" variant="info">
                                Send
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            )}
        </Formik>
    );

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
                    <Row className="justify-content-md-center">
                        {this.emailForm()}
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
        paddingBottom: "4.5%",
    },
    mainLine: { borderColor: "#5b9bbc", borderWidth: 5 },
};

export default ContactMe;
