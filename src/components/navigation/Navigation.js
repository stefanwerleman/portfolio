import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Resume from "./Resume.pdf";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar
                bg="secondary"
                variant="dark"
                className="justify-content-md-center"
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

export default Navigation;
