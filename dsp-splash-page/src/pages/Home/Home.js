import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./home.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/home.json";

class Home extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render() {
        return (
            <div>


            </div>
        )
    };
};

export default Home;