import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

// Pages:
// Home
import Home from "./pages/Home";


// Approach
import Approach from "./pages/Approach";


// About
import People from "./pages/People";
import Projects from "./pages/Projects";


// Blog
import Blog from "./pages/Blog";


// Clients
import Clients from "./pages/Clients";
import DesignBuild from "./pages/Clients/DesignBuild";
import LargeCompany from "./pages/Clients/LargeCompany";
import BoutiquePractice from "./pages/Clients/BoutiquePractice";
// Trifolds
import BPtrifold from "./pages/Clients/BoutiquePractice/BPtrifold";
import DBtrifold from "./pages/Clients/DesignBuild/DBtrifold";
import LCtrifold from "./pages/Clients/LargeCompany/LCtrifold";
// Client Form
import LearnMore from "./pages/Clients/Contact";


// Design Services
import DesignServices from "./pages/DesignServices";


// Join Us
import JoinUs from "./pages/JoinUs";
import JobList from "./pages/JoinUs/JobList";
import PartnerForm from "./pages/JoinUs/PartnerForm";
import RemindForm from "./pages/JoinUs/RemindMeLater";
// Recruit Forms
import AdminForm from "./pages/JoinUs/RecruitForms/AdminForm";
import ArchForm from "./pages/JoinUs/RecruitForms/ArchForm";
import BrandForm from "./pages/JoinUs/RecruitForms/BrandForm";
import DigitalForm from "./pages/JoinUs/RecruitForms/DigitalForm";
import GraphicsForm from "./pages/JoinUs/RecruitForms/GraphicsForm";
import InteriorsForm from "./pages/JoinUs/RecruitForms/InteriorsForm";
import ManagementForm from "./pages/JoinUs/RecruitForms/ManagementForm";
import MarketingForm from "./pages/JoinUs/RecruitForms/MarketingForm";
import ServiceForm from "./pages/JoinUs/RecruitForms/ServiceForm";

// Log in
import Login from "./pages/LogIn";


// Components
import NavBar from "./components/Navbar";
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
              

              {/* About */}
              <Route exact path="/about/people" component={People} />
              <Route exact path="/about/projects" component={Projects} />
              
              
              {/* Blog */}
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/post/:post" component={Blog} />
              <Route path="/blog/topic/:topic" component={Blog} />
              <Route path="/blog/author/:author" component={Blog} />


              {/* Events */}
              {/* <Route exact path="/events" component={Events} /> */}


              {/* Approach */}
              <Route exact path="/approach" component={Approach} />
              
              
              {/* Clients */}
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/clients/boutiquepractice" component={BoutiquePractice} />
              <Route exact path="/clients/designbuild" component={DesignBuild} />
              <Route exact path="/clients/largecompany" component={LargeCompany} />
              {/* Trifolds */}
              <Route exact path="/clients/boutiquepractice/trifold" component={BPtrifold} />
              <Route exact path="/clients/designbuild/trifold" component={DBtrifold} />
              <Route exact path="/clients/largecompany/trifold" component={LCtrifold} />
              {/* Client Contact */}
              <Route exact path="/clients/contact" component={LearnMore} />


              {/* Design Services */}
              <Route exact path="/designservices" component={DesignServices} />
              

              {/* Join Us */}
              <Route exact path="/joinus" component={JoinUs} />
              <Route exact path="/joinus/joblist" component={JobList} />
              <Route exact path="/joinus/partner" component={PartnerForm} />
              <Route exact path="/joinus/remind" component={RemindForm} />
              {/* Recruit Forms */}
              <Route exact path="/joinus/admin" component={AdminForm} />
              <Route exact path="/joinus/architecture" component={ArchForm} />
              <Route exact path="/joinus/brand" component={BrandForm} />
              <Route exact path="/joinus/digital" component={DigitalForm} />
              <Route exact path="/joinus/graphics" component={GraphicsForm} />
              <Route exact path="/joinus/interiors" component={InteriorsForm} />
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
