import React from "react";
import "./pagetop.css";

const PageTop = props => (
    <div className="topPic">
        <div className="wordsBox">
            <div className="topQ">{props.topQ}
                <span className="thesis">{props.thesis}</span>
            </div>

        </div>
    </div>
);

export default PageTop;