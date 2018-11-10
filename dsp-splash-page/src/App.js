import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import What from "./pages/What";
import Who from "./pages/Who";
import Why from "./pages/Why";
import Where from "./pages/Where";
import How from "./pages/How";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";

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
              <Route exact path="/" component={Home} />
              <Route exact path="/WHAT" component={What} />
              <Route exact path="/WHO" component={Who} />
              <Route exact path="/WHY" component={Why} />
              <Route exact path="/WHERE" component={Where} />
              <Route exact path="/HOW" component={How} />
              <Route exact path="/CONTACT" component={Contact} />
              <Route exact path="/JOINUS" component={JoinUs} />
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
