import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import How from "./pages/How";
import What from "./pages/What";
import Who from "./pages/Who";
import Why from "./pages/Why";

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
              <Route exact path="/WHAT" component={What} />
              <Route exact path="/WHO" component={Who} />
              <Route exact path="/HOW" component={How} />
              <Route exact path="/WHY" component={Why} />
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
