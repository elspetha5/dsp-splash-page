import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import What from "./pages/What";
import Who from "./pages/Who";

// Components
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Background from "./components/Background";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Background>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/what" component={What} />
              <Route exact path="/who" component={Who} />
              <Route component={NoMatch} />
            </Switch>
          </Background>

          <NavBar />

        </div>
      </Router>
    );
  }
}

export default App;
