import React from "react";
import { Button, Menu } from "semantic-ui-react";

class Navigation extends React.Component {
    render() {
        return (
            <Menu borderless>
                <Menu.Menu>
                    <Menu.Item>{"<Stefan Werleman />"}</Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item>1. About Me</Menu.Item>
                    <Menu.Item>2. Projects</Menu.Item>
                    <Menu.Item>3. Experience</Menu.Item>
                    <Menu.Item>4. Contact Me</Menu.Item>
                    <Menu.Item>
                        <Button>Resume</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Navigation;
