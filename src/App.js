import React from "react";
import Navigation from "./components/navigation/Navigation";
import Front from "./components/front/Front";

class App extends React.Component {
    render() {
        return (
            <div>
                <Front />
                <Navigation />
            </div>
        );
    }
}

export default App;
