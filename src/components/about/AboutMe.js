import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Img from "./profile-pic.png";

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">About Me</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                _______________________________________________
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image
                                src={Img}
                                alt="Profile Picture"
                                style={styles.image}
                                rounded
                            ></Image>
                        </Col>
                        <Col md="auto">
                            <p>
                                <strong>Hello,</strong>
                                <br />
                                <br />I am a Senior at the University of Central
                                Florida majoring in Computer Science. I graduate
                                <br />
                                in Summer 2021. I am seeking a Software
                                Engineering internship for Spring 2021 or Summer
                                <br />
                                2021. I am interested in the Finance and Space
                                industries. By obtaining an internship, I hope
                                <br />
                                to gain the experience and knowledge necessary
                                to provide optimal results at the company I work
                                <br />
                                for in my career. I am a very diligent and
                                detail-oriented individual that always strives
                                <br />
                                for success. I hope to bring these qualities to
                                an internship.
                                <br />
                                <br />
                                If you are interested, you can view some of my{" "}
                                <strong>
                                    <a href="#">projects</a>
                                </strong>{" "}
                                in down below and <br /> feel free to reach out
                                to me on LinkedIn or send me an{" "}
                                <strong>
                                    <a href="#">email</a>
                                </strong>
                                .
                                <h2 style={styles.links}>
                                    <a
                                        href="https://github.com/stefanwerleman"
                                        target="_blank"
                                    >
                                        <GoMarkGithub style={styles.github} />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/stefanwerleman"
                                        target="_blank"
                                    >
                                        <FaLinkedin style={styles.linkedin} />
                                    </a>
                                    <a href="#" target="_blank">
                                        <IoMdMail style={styles.email} />
                                    </a>
                                </h2>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingLeft: "7.20%",
        paddingRight: "7.20%",
        paddingTop: "5.20%",
        paddingBottom: "12.13%",
    },
    image: { width: 271, height: 323 },
    linkedin: { color: "black" },
    github: { color: "black" },
    email: { color: "black" },
    links: {
        justifyContent: "space-between",
        display: "flex",
        width: "16%",
    },
};

export default AboutMe;
