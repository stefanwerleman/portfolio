import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Resume from "./Resume.pdf";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar
                style={styles.navbar}
                variant="dark"
                className="justify-content-md-center"
                sticky="top"
            >
                <Nav>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Skills</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>Experience</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Button
                        variant="outline-light"
                        href={Resume}
                        target="_blank"
                    >
                        Resume
                    </Button>
                </Nav>
            </Navbar>
        );
    }
}

const styles = { navbar: { backgroundColor: "#39689b", top: -1 } };

export default Navigation;
