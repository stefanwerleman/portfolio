import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-scroll";
import Img from "./profile-pic.png";
import "./AboutMe.css";

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about">
                <Container id="about-container" fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="about-title" className="display-4">
                                About Me
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row id="about-body" className="justify-content-lg-center">
                        <Col id="image-container">
                            <Image
                                id="profile-pic"
                                src={Img}
                                alt="Profile Picture"
                                rounded
                            ></Image>
                        </Col>
                        <Col id="text-container">
                            <p id="about-text">
                                <strong>Hello,</strong>
                                <br />
                                <br />I am a Senior at the University of Central
                                Florida majoring in Computer Science. I graduate
                                in Summer 2021. I am seeking a Software
                                Engineering internship for Spring 2021 or Summer
                                2021. I am interested in the Finance and Space
                                industries. By obtaining an internship, I hope
                                to gain the experience and knowledge necessary
                                to provide optimal results at the company I work
                                for in my career. I am a very diligent and
                                detail-oriented individual that always strives
                                for success. I hope to bring these qualities to
                                an internship.
                                <br />
                                <br />
                                If you are interested, you can view some of my{" "}
                                <strong>
                                    <a href="#">
                                        <Link
                                            to="projects"
                                            smooth={true}
                                            duration={1000}
                                        >
                                            projects
                                        </Link>
                                    </a>
                                </strong>{" "}
                                in down below and feel free to reach out to me
                                on LinkedIn or send me an{" "}
                                <strong>
                                    <a href="#">
                                        <Link
                                            to="contact"
                                            smooth={true}
                                            duration={1000}
                                        >
                                            email
                                        </Link>
                                    </a>
                                </strong>
                                .
                            </p>
                            <h3 id="links" style={styles.links}>
                                <a
                                    href="https://github.com/stefanwerleman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GoMarkGithub style={styles.github} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/stefanwerleman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin style={styles.linkedin} />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Link
                                        to="contact"
                                        smooth={true}
                                        duration={1000}
                                    >
                                        <IoMdMail style={styles.email} />
                                    </Link>
                                </a>
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    linkedin: { color: "black" },
    github: { color: "black" },
    email: { color: "black" },
    mainLine: {
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
};

export default AboutMe;
