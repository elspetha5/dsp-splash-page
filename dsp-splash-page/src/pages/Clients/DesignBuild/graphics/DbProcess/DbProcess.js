import React from "react";
import "./dbProcess.css";

import teaming from "./images/teaming.png";
import proposal from "./images/proposal.png";
import programming from "./images/program.png";
import preliminary from "./images/concept.png";
import development from "./images/desDev.png";
import documents from "./images/construction.png";
import permitting from "./images/permitting.png";
import admin from "./images/consstruction.png";
import occupancy from "./images/occupancy.png";

const icons = [
    {
        id: "teaming",
        title: "Teaming & Pre-proposal",
        img: teaming,
        background: "lightGrey-background"
    },
    {
        id: "proposal",
        title: "Proposal",
        img: proposal,
        background: "lightGrey-background"
    },
    {
        id: "programming",
        title: "Programming & Strategy",
        img: programming,
        background: "skyBlue-background"
    },
    {
        id: "preliminary",
        title: "Preliminary Design",
        img: preliminary,
        background: "skyBlue-background"
    },
    {
        id: "development",
        title: "Design Development",
        img: development,
        background: "yellow-background"
    },
    {
        id: "documents",
        title: "Construction Documents",
        img: documents,
        background: "orange-background"
    },
    {
        id: "permitting",
        title: "Permitting",
        img: permitting,
        background: "salmon-background"
    },
    {
        id: "admin",
        title: "Construction Admin",
        img: admin,
        background: "salmon-background"
    },
    {
        id: "occupancy",
        title: "Occupancy",
        img: occupancy,
        background: "lightGrey-background"
    }
]

const DbProcess = () => {
    return (
        <div id="dbProcess">
            <div id="dbProcessPre" className="dbLabel lightGrey-background">PRE DESIGN</div>
            <div id="dbProcessDes" className="dbLabel green-background">DESIGN</div>
            <div id="dbProcessConst" className="dbLabel salmon-background">CONSTRUCTION</div>
            <div id="dbProcessMove" className="dbLabel lightGrey-background">MOVE IN</div>

            <div id="dbProcessSelection" className="lightGrey-background">selection</div>
            <div id="dbProcessPrelim" className="skyBlue-background">preliminary DESIGN</div>
            <div id="dbProcessDraw" className="yellow-background">detail drawings</div>
            <div id="dbProcessConstruction" className="salmon-background">construction</div>
            <div className="lightGrey-background"></div>

            {icons.map(icon => (
                <div className={`dbSection ${icon.background}`}>
                    <img src={icon.img} alt={icon.id} id={`db${icon.id}`} className="dbIcon" />
                    <div>{icon.title}</div>
                </div>
            ))}
        </div>
    )
};

export default DbProcess;