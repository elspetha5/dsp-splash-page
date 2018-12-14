import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
// Home
import Home from "./pages/Home";

// Approach
import What from "./pages/Approach/What";
import Where from "./pages/Approach/Where";
import Why from "./pages/Approach/Why";
import Who from "./pages/Approach/Who";
import How from "./pages/Approach/How";

// Projects
import Commercial from "./pages/Projects/Commercial";
import Residential from "./pages/Projects/Residential";
import Workplace from "./pages/Projects/Workplace";


// Clients
import Clients from "./pages/Clients";
import Contact from "./pages/Clients/Contact";


// Design Services
import DesignServices from "./pages/DesignServices";
import Architectural from "./pages/DesignServices/ArchitecturalDesign";
import Brand from "./pages/DesignServices/BrandDesign";
import Communication from "./pages/DesignServices/CommunicationDesign";
import DigitalDesign from "./pages/DesignServices/DigitalDesign";
import Industrial from "./pages/DesignServices/IndustrialDesign";
import Interior from "./pages/DesignServices/InteriorDesign";
import Service from "./pages/DesignServices/ServiceDesign";


// Join Us
import JoinUs from "./pages/JoinUs";
import RecruitForm from "./pages/JoinUs/RecruitForm";
import PartnerForm from "./pages/JoinUs/PartnerForm";


// Log in
import Login from "./pages/LogIn";


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
              {/* Home */}
              <Route exact path="/" component={Home} />

              {/* Approach */}
              <Route exact path="/approach/What" component={What} />
              <Route exact path="/approach/Where" component={Where} />
              <Route exact path="/approach/Why" component={Why} />
              <Route exact path="/approach/Who" component={Who} />
              <Route exact path="/approach/How" component={How} />

              {/* Projects */}
              <Route exact path="/projects/Commercial" component={Commercial} />
              <Route exact path="/projects/Residential" component={Residential} />
              <Route exact path="/projects/Workplace" component={Workplace} />

              {/* Clients */}
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/Contact" component={Contact} />

              {/* Design Services */}
              <Route exact path="/designservices" component={DesignServices} />
              <Route exact path="/designservices/Architectural" component={Architectural} />
              <Route exact path="/designservices/Brand" component={Brand} />
              <Route exact path="/designservices/Communication" component={Communication} />
              <Route exact path="/designservices/Digital" component={DigitalDesign} />
              <Route exact path="/designservices/Industrial" component={Industrial} />
              <Route exact path="/designservices/Interior" component={Interior} />
              <Route exact path="/designservices/Service" component={Service} />


              {/* Join Us */}
              <Route exact path="/joinus" component={JoinUs} />
              <Route exact path="/joinus/partner" component={PartnerForm} />
              <Route exact path="/joinus/recruit" component={RecruitForm} />

              {/* Log In */}
              <Route exact path="/login" component={Login} />

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
