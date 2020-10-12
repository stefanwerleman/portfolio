import React from "react";
import "./App.css";

import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Main />
            </div>
        );
    }
}

export default App;
