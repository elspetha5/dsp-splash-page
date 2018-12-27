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
import LearnMore from "./pages/Clients/Contact";


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
import JobList from "./pages/JoinUs/JobList";
import PartnerForm from "./pages/JoinUs/PartnerForm";
// Recruit Forms
import AdminForm from "./pages/JoinUs/RecruitForms/AdminForm";
import ArchForm from "./pages/JoinUs/RecruitForms/ArchForm";
import BrandForm from "./pages/JoinUs/RecruitForms/BrandForm";
import DigitalForm from "./pages/JoinUs/RecruitForms/DigitalForm";
import GraphicsForm from "./pages/JoinUs/RecruitForms/GraphicsForm";
import InteriorsForm from "./pages/JoinUs/RecruitForms/InteriorsForm";
import LegalForm from "./pages/JoinUs/RecruitForms/LegalForm";
import ManagementForm from "./pages/JoinUs/RecruitForms/ManagementForm";
import MarketingForm from "./pages/JoinUs/RecruitForms/MarketingForm";
import ServiceForm from "./pages/JoinUs/RecruitForms/ServiceForm";



// Log in
import Login from "./pages/LogIn";


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
              {/* Home */}
              <Route exact path="/" component={Home} />

              {/* Approach */}
              <Route exact path="/approach/what" component={What} />
              <Route exact path="/approach/where" component={Where} />
              <Route exact path="/approach/why" component={Why} />
              <Route exact path="/approach/who" component={Who} />
              <Route exact path="/approach/how" component={How} />

              {/* Projects */}
              <Route exact path="/projects/commercial/office" component={Commercial} />
              <Route exact path="/projects/residential" component={Residential} />
              <Route exact path="/projects/workplace" component={Workplace} />

              {/* Clients */}
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/clients/contact" component={LearnMore} />

              {/* Design Services */}
              <Route exact path="/designservices" component={DesignServices} />
              <Route exact path="/designservices/architectural" component={Architectural} />
              <Route exact path="/designservices/brand" component={Brand} />
              <Route exact path="/designservices/communication" component={Communication} />
              <Route exact path="/designservices/digital" component={DigitalDesign} />
              <Route exact path="/designservices/industrial" component={Industrial} />
              <Route exact path="/designservices/interior" component={Interior} />
              <Route exact path="/designservices/service" component={Service} />

              {/* Join Us */}
              <Route exact path="/joinus" component={JoinUs} />
              <Route exact path="/joinus/joblist" component={JobList} />
              <Route exact path="/joinus/partner" component={PartnerForm} />
              {/* Recruit Forms */}
              <Route exact path="/joinus/admin" component={AdminForm} />
              <Route exact path="/joinus/architecture" component={ArchForm} />
              <Route exact path="/joinus/brand" component={BrandForm} />
              <Route exact path="/joinus/digital" component={DigitalForm} />
              <Route exact path="/joinus/graphics" component={GraphicsForm} />
              <Route exact path="/joinus/interiors" component={InteriorsForm} />
              <Route exact path="/joinus/legal" component={LegalForm} />
              <Route exact path="/joinus/management" component={ManagementForm} />
              <Route exact path="/joinus/marketing" component={MarketingForm} />
              <Route exact path="/joinus/service" component={ServiceForm} />

              {/* Log In */}
              <Route exact path="/login" component={Login} />

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
