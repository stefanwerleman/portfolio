import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const social = {
    linkedInURL: "https://www.linkedin.com/in/stefanwerleman/",
    gitHubURL: "https://github.com/stefanwerleman",
};

class Links extends React.Component {
    render() {
        return (
            <Menu icon="labeled" vertical secondary inverted>
                <Menu.Item href={social.gitHubURL} target="_blank">
                    <Icon name="github" />
                </Menu.Item>
                <Menu.Item href={social.linkedInURL} target="_blank">
                    <Icon name="linkedin" />
                </Menu.Item>
            </Menu>
        );
    }
}

export default Links;
