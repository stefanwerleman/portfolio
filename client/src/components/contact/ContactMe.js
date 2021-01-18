import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ContactMe.css";

// const axios = require("axios");

class ContactMe extends React.Component {
    // NOTE: Will put up form later
    // handleEmail = (event) => {
    //     const { URL } = this.props;

    //     let newEmail = {
    //         name: event.name,
    //         email: event.email,
    //         message: event.message,
    //     };

    //     axios
    //         .post(URL + "/email", newEmail)
    //         .then((res) => {
    //             if (res.status !== 200) {
    //                 event.preventDefault();
    //             }
    //             const emailForm = document.forms["form-container"];
    //             emailForm.reset();
    //             console.log("Email sent");
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // schema = Yup.object({
    //     name: Yup.string().required("Please provide a name."),
    //     email: Yup.string().required("Please provide a valid email address."),
    //     message: Yup.string().required("Please provide a message."),
    // });

    // emailForm = () => (
    //     <Formik
    //         id="formik-container"
    //         validationSchema={this.schema}
    //         onSubmit={this.handleEmail}
    //         initialValues={{ name: "", email: "", message: "" }}
    //     >
    //         {({ handleSubmit, errors, handleChange }) => (
    //             <Form id="form-container" onSubmit={handleSubmit} noValidate>
    //                 <Form.Row>
    //                     <Form.Group id="name-group" as={Col}>
    //                         <Form.Control
    //                             id="name-input"
    //                             type="text"
    //                             name="name"
    //                             placeholder="Name"
    //                             onChange={handleChange}
    //                             isInvalid={!!errors.name}
    //                         ></Form.Control>
    //                         <Form.Control.Feedback type="invalid" tooltip>
    //                             {errors.name}
    //                         </Form.Control.Feedback>
    //                     </Form.Group>
    //                 </Form.Row>
    //                 <Form.Row>
    //                     <Form.Group id="email-group" as={Col}>
    //                         <Form.Control
    //                             id="email-input"
    //                             type="email"
    //                             name="email"
    //                             placeholder="Email"
    //                             onChange={handleChange}
    //                             isInvalid={!!errors.name}
    //                         ></Form.Control>
    //                         <Form.Control.Feedback type="invalid" tooltip>
    //                             {errors.email}
    //                         </Form.Control.Feedback>
    //                     </Form.Group>
    //                 </Form.Row>
    //                 <Form.Row>
    //                     <Form.Group id="message-group" as={Col}>
    //                         <Form.Control
    //                             id="message-input"
    //                             name="message"
    //                             as="textarea"
    //                             rows="8"
    //                             placeholder="Message"
    //                             onChange={handleChange}
    //                             isInvalid={!!errors.message}
    //                         ></Form.Control>
    //                         <Form.Control.Feedback type="invalid" tooltip>
    //                             {errors.message}
    //                         </Form.Control.Feedback>
    //                     </Form.Group>
    //                 </Form.Row>
    //                 <Form.Row
    //                     id="button-row"
    //                     className="justify-content-sm-center"
    //                 >
    //                     <Form.Group>
    //                         <Button
    //                             id="send-button"
    //                             type="submit"
    //                             variant="info"
    //                         >
    //                             Send
    //                         </Button>
    //                     </Form.Group>
    //                 </Form.Row>
    //             </Form>
    //         )}
    //     </Formik>
    // );

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
                    <Row id="contact-row" className="justify-content-sm-center">
                        <Col id="contact-text-col" md="auto">
                            <p id="contact-text">
                                If you are looking for a Software Engineer for
                                an internship position, feel free to drop me an
                                email and I will get back to you as soon as
                                possible.
                            </p>
                        </Col>
                        <Col id="contact-button-col" md="auto">
                            <a
                                id="contact-anchor"
                                href="mailto:stefanwerleman@yahoo.com"
                            >
                                <Button
                                    id="contact-button"
                                    variant="outline-info"
                                    size="lg"
                                >
                                    stefanwerleman@yahoo.com
                                </Button>
                            </a>
                        </Col>
                        <Col id="contact-button-col" md="auto">
                            <a
                                id="contact-anchor"
                                href="https://github.com/stefanwerleman"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    id="contact-button"
                                    variant="outline-info"
                                    size="lg"
                                >
                                    GitHub
                                </Button>
                            </a>
                        </Col>
                        <Col id="contact-button-col" md="auto">
                            <a
                                id="contact-anchor"
                                href="https://www.linkedin.com/in/stefanwerleman/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    id="contact-button"
                                    variant="outline-info"
                                    size="lg"
                                >
                                    LinkedIn
                                </Button>
                            </a>
                        </Col>
                    </Row>
                    {/*
                    NOTE: Will put up form later
                    <br />
                     <Row id="email-row" className="justify-content-sm-center">
                        { {this.emailForm()} }
                    </Row> */}
                </Container>
            </div>
        );
    }
}

const styles = {
    mainLine: { borderColor: "#5b9bbc", borderWidth: 5 },
};

export default ContactMe;
