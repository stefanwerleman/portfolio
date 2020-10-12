import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Projects</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                _______________________________________________
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
        // padding: "21.13%",
    },
};

export default Projects;
