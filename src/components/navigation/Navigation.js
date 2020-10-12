import React from "react";
import { Button, Menu } from "semantic-ui-react";
import Resume from "./Resume.pdf";

class Navigation extends React.Component {
    handleHomeButton = (event) => {
        console.log("Home");
    };

    handleAboutMe = (event) => {
        console.log("About Me");
    };

    handleProjects = (event) => {
        console.log("Projects");
    };

    handleExperience = (event) => {
        console.log("Experience");
    };

    handleContactMe = (event) => {
        console.log("Contact Me");
    };

    render() {
        return (
            <Menu size="large" inverted secondary fixed>
                <Menu.Menu>
                    <Menu.Item onClick={this.handleHomeButton}>
                        {"<Stefan Werleman />"}
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item onClick={this.handleAboutMe}>
                        1. About Me
                    </Menu.Item>
                    <Menu.Item onClick={this.handleProjects}>
                        2. Projects
                    </Menu.Item>
                    <Menu.Item onClick={this.handleExperience}>
                        3. Experience
                    </Menu.Item>
                    <Menu.Item onClick={this.handleContactMe}>
                        4. Contact Me
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                            href={Resume}
                            target="_blank"
                            color="teal"
                            basic
                        >
                            Resume
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Navigation;
