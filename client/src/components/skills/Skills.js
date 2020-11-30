import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillList from "../skillList/skillList";
import Skill from "../skill/Skill";
import "./Skills.css";

class Skills extends React.Component {
    state = {
        skills: SkillList,
    };

    render() {
        const { skills } = this.state;

        return (
            <div id="skills">
                <Container id="skills-container" style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="skills-title" className="display-4">
                                Skills
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row
                        id="skills-text-row"
                        className="justify-content-md-center"
                    >
                        <Col md="auto">
                            <p id="skills-text">
                                I worked with a wide variety of programming
                                languages. Whenever I work on web applications I
                                rely on <strong>JavaScript</strong> or{" "}
                                <strong>Django</strong> with their respective
                                frameworks. For programming competitions or
                                algorithms and data structures, I heavily use{" "}
                                <strong>Java</strong> because that is the
                                language I am most proficient in. Whenever I{" "}
                                need the most performance I use{" "}
                                <strong>C</strong>, however I am starting lean
                                more towards <strong>C++</strong> for
                                performance. For APIs I mostly use{" "}
                                <strong>Google Cloud Technologies</strong>, the{" "}
                                <a
                                    href="https://github.com/KnightHacks-GMSJ/AllThingsBooks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>All Things Books</strong>
                                </a>{" "}
                                React Native application uses Google's{" "}
                                <a
                                    href="https://developers.google.com/books"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>Books API</strong>
                                </a>
                                .
                            </p>
                        </Col>
                    </Row>
                    <Row id="skills-row">
                        {skills.map((skill) => (
                            <Skill key={skill.id} skill={skill} />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "#eee",
    },
    mainLine: {
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
    smallLines: { borderColor: "#39689b" },
};

export default Skills;
