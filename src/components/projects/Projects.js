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
                            <hr
                                style={{
                                    borderColor: "#39689b",
                                    borderWidth: 5,
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: "5.20%",
    },
};

export default Projects;
