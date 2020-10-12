import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Container } from "semantic-ui-react";

// Special orange color #ef6b74
class App extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Navigation />
            </Container>
        );
    }
}

const styles = { container: { width: "100%" } };

export default App;
