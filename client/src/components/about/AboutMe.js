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
                <Container id="about-container" style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="about-title" className="display-4">
                                About Me
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col id="image-container" lg="auto">
                            <Image
                                id="profile-pic"
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
                                in down below and <br /> feel free to reach out
                                to me on LinkedIn or send me an{" "}
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
                            <h3 style={styles.links}>
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
    container: {
        paddingLeft: "7.20%",
        paddingRight: "7.20%",
        paddingTop: "5.20%",
        paddingBottom: "14.2%",
    },
    linkedin: { color: "black" },
    github: { color: "black" },
    email: { color: "black" },
    links: {
        justifyContent: "space-between",
        display: "flex",
        width: "16%",
    },
    mainLine: {
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
};

export default AboutMe;
