import React from "react";
import "./dbBanner.css";

import whiteLogo from "./dsplogo-white.png";

const DbBanner = () => {
    return (
        <div id="dbBannerWrapper" className="charcoalish-background slateWhite-text">
            <div id="dbBannerTitle"><span id="dbBannerDB" className="charcoalish-background">DESIGN BUILD</span></div>
            <div id="dashedBorder">

                <div id="ccLogo">
                    <div id="dbLogoWrapper">
                        <img src={whiteLogo} alt="white logo" id="dbBannerLogo" />
                    </div>
                    <div className="ccText yellow-text">CONSTRUCTABILITY</div>
                    <div className="ccText yellow-text">CONCEPT</div>
                </div>

                <div id="dbPlus" className="yellow-text"><i class="fas fa-plus"></i></div>

                <div id="yourBuild">
                    <div id="your">YOUR</div>
                    <div id="build">BUILD</div>
                </div>

                <div id="equals" className="yellow-text"><i class="fas fa-equals"></i></div>

                <div id="ipd">
                    <div id="IPD" className="salmon-text">IPD</div>
                    <div id="integ" className="integProjDel yellow-text">INTEGRATED</div>
                    <div id="projDel" className="integProjDel yellow-text">PROJECT DELIVERY</div>
                </div>

            </div>
        </div>
    )
};

export default DbBanner;