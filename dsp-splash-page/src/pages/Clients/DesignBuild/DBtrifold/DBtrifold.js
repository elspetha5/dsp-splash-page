import React, { Component } from "react";
import "./assets/css/trifold.css";
import "./assets/css/mediaTrifold.css";

import tri1 from "./assets/images/db-trifold1.png";
import tri2 from "./assets/images/db-trifold2.png";
import tri3 from "./assets/images/db-trifold3.png";
import triCenter from "./assets/images/db-trifold-center.png";
import triCenter1 from "./assets/images/db-trifold-center-peek1.png";
import triCenter2 from "./assets/images/db-trifold-center-peek2.png";
import triCenter3 from "./assets/images/db-trifold-center-peek3.png";


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

        if (this.state.tri1 === "tri1-open") {
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
                    tri3: "triInvisible",
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
                tri1: "tri1-flipback"
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
            <div id="triWrapper" onClick={() => this.handleTrifold()}>
                <img src={triCenter} alt="dbTri" id={this.state.triCenter} className="triImg" />
                <img src={triCenter2} alt="dbTri" id={this.state.triCenter2} className="triImg" />
                <img src={this.state.tri2Img} alt="dbTri" id={this.state.tri2} className="triImg triThree" />
                <img src={this.state.tri1Img} alt="dbTri" id={this.state.tri1} className="triImg triThree" />
            </div>
        )
    };
};

export default DesignBuild;