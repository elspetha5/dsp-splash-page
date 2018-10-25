import React from "react";
import "./qpage.css";

const QPage = props => (
    <div className="navClear">
        <div className={"contentBackground"}>
            <div className="half bigQ">{props.question}</div>
            <div className="half answer">{props.answer}</div>
        </div>
    </div>
);

export default QPage;