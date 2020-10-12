import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/navigation/Navigation";
// Special orange color #ef6b74
class App extends React.Component {
    render() {
        return (
            <Container>
                <Navigation />
            </Container>
        );
    }
}

export default App;
