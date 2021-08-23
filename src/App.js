import React, { useState } from "react";

import InitialConfig from "./components/InitialConfig";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 4,
            players: {
                1: {},
                2: {},
                3: {},
                4: {},
            },
        };
        this.initialEnded = this.initialEnded.bind(this);
    }
    render() {
        return (
            <>
                <InitialConfig 
                    size = {this.state.size}
                    getSize = {(e) => this.setState({size: e.target.value})}
                    initialEnded = {this.initialEnded}
                />
            </>
        );
    }

    initialEnded(e)
    {
        alert(e.target.name);
    }
}

export default App;
