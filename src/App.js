import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Personnages from "./Personnages"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/personnages" component={Personnages} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
