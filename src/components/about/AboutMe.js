import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
                        <Col md="auto">Hello there,</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        // padding: "21.13%",
    },
    image: { width: 251, height: 290 },
};

export default AboutMe;
