import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Container, Segment, Menu, Grid } from "semantic-ui-react";
import Links from "./components/links/Links";
import Email from "./components/email/Email";
import Main from "./components/main/Main";

// Special orange color #ef6b74
class App extends React.Component {
    render() {
        return (
            <Grid columns={1} divided>
                <Grid.Row verticalAlign="top">
                    <Grid.Column>
                        <Navigation />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row verticalAlign="bottom" columns={3}>
                    <Grid.Column width={1}>
                        <Links />
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Main />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Email />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
