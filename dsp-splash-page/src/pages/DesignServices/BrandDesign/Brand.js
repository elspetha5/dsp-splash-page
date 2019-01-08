import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./brand.css";

import brands from "../../../JSON/DesignServices/brand.json";

class Brand extends Component {
    state = {
        brands
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="ideaBackground">
                    <div className="leftIdea"><span className="designThesis">dsp.brand</span></div>
                </div>

                {this.state.brands.map(brand => (
                    <div>
                        <LeftIdea
                            idea={brand.leftIdea}
                            verbiage={brand.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Brand;