import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const emails = {
    yahoo: "stefanwerleman@yahoo.com",
    knights: "stefanwerleman@knights.ucf.edu",
};

class Email extends React.Component {
    render() {
        return (
            <Menu icon="labeled" vertical secondary inverted>
                <Menu.Item href={emails.yahoo} target="_blank">
                    <Icon name="mail outline" />
                </Menu.Item>
                <Menu.Item href={emails.knights} target="_blank">
                    <Icon name="mail" />
                </Menu.Item>
            </Menu>
        );
    }
}

export default Email;
