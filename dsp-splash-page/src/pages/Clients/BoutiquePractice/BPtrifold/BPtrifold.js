import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/trifoldCSS/trifold.css";
import "../../assets/css/trifoldCSS/mediaTrifold.css";

import tri1 from "./images/bp-trifold1.png";
import tri2 from "./images/bp-trifold2.png";
import tri3 from "./images/bp-trifold3.png";
import triCenter from "./images/bp-trifold-center.png";
import triCenter1 from "./images/bp-trifold-center1.png";
import triCenter2 from "./images/bp-trifold-center2.png";
import triCenter3 from "./images/bp-trifold-center3.png";


class DesignBuild extends Component {
    state = {
        tri1Img: tri1,
        tri2Img: tri2,
        tri1: "tri1-straight",
        tri2: "triInvisible",
        tri3: "triInvisible",
        triCenter: "triInvisible",
        triCenter2: "triInvisible"
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    handleTrifold = () => {
        if (this.state.tri1 === "tri1-straight") {
            this.setState({
                tri1: "tri1-open",
                tri2: "tri2-straight"
            });

            setTimeout(() => {
                this.setState({
                    tri1Img: triCenter1
                })
            }, 1.5 * 1000);

        }

        if (this.state.tri2 === "tri2-straight") {
            this.setState({
                tri1: "tri1-flatten",
                tri2: "tri2-open",
                triCenter2: "triCenter2-straight"
            });

            setTimeout(() => {
                this.setState({
                    tri2Img: triCenter3
                })
            }, 1.5 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1: "triInvisible",
                    tri2: "triInvisible",
                    triCenter: "triCenter-full",
                    triCenter1: "triInvisible",
                    triCenter2: "triInvisible",
                    triCenter3: "triInvisible"
                })
            }, 3 * 1000)

        }

        if (this.state.triCenter === "triCenter-full") {
            this.setState({
                tri1: "tri1-fold",
                tri2: "tri2-fold",
                triCenter2: "triCenter2-straight",
                triCenter: "triInvisible"
            });

            setTimeout(() => {
                this.setState({
                    tri2Img: tri2
                })
            }, 1 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1Img: tri1
                })
            }, 1.5 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1: "tri1-flip",
                    tri2: "triInvisible",
                    tri3: "triButtonVisible",
                    triCenter: "triInvisible",
                    triCenter1: "triInvisible",
                    triCenter2: "triInvisible",
                    triCenter3: "triInvisible"
                })
            }, 3 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1Img: tri3
                })
            }, 4 * 1000);
        }

        if (this.state.tri1 === "tri1-flip") {
            this.setState({
                tri1: "tri1-flipback",
                tri3: "triInvisible"
            });

            setTimeout(() => {
                this.setState({
                    tri1Img: tri1
                })
            }, 1 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1Img: tri1,
                    tri2Img: tri2,
                    tri1: "tri1-straight",
                    tri2: "triInvisible",
                    tri3: "triInvisible",
                    triCenter: "triInvisible",
                    triCenter1: "triInvisible",
                    triCenter2: "triInvisible",
                    triCenter3: "triInvisible"
                })
            }, 2.5 * 1000);

        }
    }

    handleTrifoldReverse = () => {
        if (this.state.tri1 === "tri1-straight") {
            this.setState({
                tri1Img: tri1,
                tri2Img: tri2,
                tri1: "tri1-flip",
                tri2: "triInvisible",
                tri3: "triButtonVisible",
                triCenter: "triInvisible",
                triCenter1: "triInvisible",
                triCenter2: "triInvisible",
                triCenter3: "triInvisible"
            });

            setTimeout(() => {
                this.setState({
                    tri1Img: tri3
                })
            }, 1 * 1000);
        }

        if (this.state.tri2 === "tri2-straight") {
            this.setState({
                tri1Img: tri1,
                tri1: "tri1-close"
            });

            setTimeout(() => {
                this.setState({
                    tri1: "tri1-straight",
                    tri2: "triInvisible"
                })
            }, 2 * 1000);

        }

        if (this.state.tri1 === "triInvisible") {
            this.setState({
                tri1: "tri1-halfOpen",
                tri2: "tri2-fold",
                triCenter2: "triCenter2-straight",
                triCenter: "triInvisible"
            });

            setTimeout(() => {
                this.setState({
                    tri2Img: tri2
                })
            }, 1 * 1000);

            setTimeout(() => {
                this.setState({
                    tri2: "tri2-straight",
                    triCenter2: "triInvisible"
                })
            }, 2.5 * 1000);
        }

        if (this.state.tri1 === "tri1-flip") {
            this.setState({
                tri1: "tri1-flipback",
                tri3: "triInvisible"
            });

            setTimeout(() => {
                this.setState({
                    tri1Img: tri1
                })
            }, 1 * 1000);

            setTimeout(() => {
                this.setState({
                    tri1Img: tri1,
                    tri2Img: tri2,
                    tri1: "tri1-straight",
                    tri2: "triInvisible",
                    tri3: "triInvisible",
                    triCenter: "triInvisible",
                    triCenter1: "triInvisible",
                    triCenter2: "triInvisible",
                    triCenter3: "triInvisible"
                })
            }, 2.5 * 1000);

        }
    }

    render() {
        return (
            <div>
                <div id="triWrapper" onClick={() => this.handleTrifold()}>
                    <div id={this.state.tri3} className="triback">
                        <img src={tri3} alt="dbTri" className="tribackImg slateWhite-background" />
                        <div id="triSocialWrapper">
                            <a id="triSocial" className="link" href="https://www.linkedin.com/company/designserviceprofessionalspllc/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                            <a id="triSocial" className="link" href="https://www.instagram.com/dsp.design_virtual/" target="blank"><i className="fab fa-instagram"></i></a>
                            <a id="triSocial" className="link" href="https://www.facebook.com/dspdesignvirtual/" target="blank"><i className="fab fa-facebook"></i></a>
                            <a id="triSocial" className="link" href="https://twitter.com/dspdesignUSA" target="blank"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div id="triButtonWrapper">
                            <Link id="triLink" className="link" to="/clients/boutiquepractice">learn more</Link>
                            <Link id="triLink" className="link" to="/clients/contact">contact us</Link>
                        </div>
                    </div>
                    <img src={triCenter} alt="dbTri" id={this.state.triCenter} className="triImg slateWhite-background" />
                    <img src={triCenter2} alt="dbTri" id={this.state.triCenter2} className="triImg slateWhite-background" />
                    <img src={this.state.tri2Img} alt="dbTri" id={this.state.tri2} className="triImg slateWhite-background" />
                    <img src={this.state.tri1Img} alt="dbTri" id={this.state.tri1} className="triImg slateWhite-background" />

                </div>

                <div id="triLeftArrow" className="triArrow charcoalish-text" onClick={() => this.handleTrifoldReverse()}><i class="fas fa-chevron-left"></i></div>
                <div id="triRightArrow" className="triArrow charcoalish-text" onClick={() => this.handleTrifold()}><i class="fas fa-chevron-right"></i></div>
            </div>
        )
    };
};

export default DesignBuild;