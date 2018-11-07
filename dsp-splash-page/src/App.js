import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import How from "./pages/How";
import What from "./pages/What";
import Who from "./pages/Who";
import Why from "./pages/Why";
import Contact from "./pages/Contact";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import Background from "./components/Background";


class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Background>
            <Switch>
              <Route exact path="/" component={What} />
              <Route exact path="/WHAT" component={What} />
              <Route exact path="/WHO" component={Who} />
              <Route exact path="/HOW" component={How} />
              <Route exact path="/WHY" component={Why} />
              <Route exact path="/CONTACT" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Background>

          <NavBar />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
