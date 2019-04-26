import React, { Component } from "react";
import "./locationMap.css";

import map from "./us-map-outline.png";

class LocationMap extends Component {
    state = {
        locations: [
            {
                tagName: "atl",
                cityName: "atlanta, ga",
                visibility: "atlHidden"
            },
            {
                tagName: "brooklyn",
                cityName: "brooklyn, ny",
                visibility: "brooklynHidden"
            },
            {
                tagName: "chi",
                cityName: "chicago, il",
                visibility: "chiHidden"
            },
            {
                tagName: "austin",
                cityName: "austin, tx",
                visibility: "austinHidden"
            },
            {
                tagName: "phx",
                cityName: "phoenix, az",
                visibility: "phxHidden"
            },
            {
                tagName: "minn",
                cityName: "minneapolis, mn",
                visibility: "minnHidden"
            },
            {
                tagName: "sl",
                cityName: "salt lake city, ut",
                visibility: "slHidden"
            },
            {
                tagName: "sanFran",
                cityName: "san francisco, ca",
                visibility: "sanFranHidden"
            }
        ],
        dot: "dotWait"
    }

    handleMapLoad = () => {
        this.setState({
            dot: "dot"
        })
    }

    handleMouseOver = (i, location) => {
        let arr = this.state.locations.slice();
        arr[i].visibility = location + "Show";
        this.setState({
            location: arr
        })
    };

    handleMouseOut = (i, location) => {
        let arr = this.state.locations.slice();
        arr[i].visibility = location + "Hidden";
        this.setState({
            location: arr
        })
    }

    render() {
        return (
            <div id="locationBackground">
                <div id="virtualTagLine" className="nightBlue-text">
                    <div id="everywhere" className="charcoalish-text">we are <span id="virtually">virtually</span> EVERYWHERE</div>
                </div>

                <div id="mapDots">
                    <img src={map} alt="Locations Map" id="outline" className="map" onLoad={() => {this.handleMapLoad()}} />
                    {this.state.locations.map((location, i) => (
                        <div id={location.tagName} className="dots">
                            <div className={`${this.state.dot} salmon-background ${location.tagName}`}
                                onMouseOver={() => { this.handleMouseOver(i, location.tagName) }}
                                onMouseOut={() => { this.handleMouseOut(i, location.tagName) }}>
                            </div>
                            <div className={`locationNames lightPink-background charcoalish-text ${location.visibility}`}>{location.cityName}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
};

export default LocationMap;