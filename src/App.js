import React from "react";
import "./App.css";

import Navigation from "./components/navigation/Navigation";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation />
            </div>
        );
    }
}

export default App;
