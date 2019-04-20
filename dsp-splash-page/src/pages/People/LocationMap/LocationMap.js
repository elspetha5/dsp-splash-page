import React, { Component } from "react";
import "./locationMap.css";

import map from "./us-map-outline.png";

class LocationMap extends Component {
    state = {
        locations: [
            {
                tagName: "sanFran",
                cityName: "san francisco, ca"
            },
            {
                tagName: "sl",
                cityName: "salt lake city, ut"
            },
            {
                tagName: "phx",
                cityName: "phoenix, az"
            },
            {
                tagName: "minn",
                cityName: "minneapolis, mn"
            },
            {
                tagName: "austin",
                cityName: "austin, tx"
            },
            {
                tagName: "chi",
                cityName: "chicago, il"
            },
            {
                tagName: "atl",
                cityName: "atlanta, ga"
            },
            {
                tagName: "brooklyn",
                cityName: "brooklyn, ny"
            }
        ]
    }

    render() {
        return (
            <div>
                <div id="virtualTagLing">we are "virtually" everywhere</div>

                <div id="mapDots">
                    <img src={map} alt="Locations Map" id="outline" className="map" />
                    {this.state.locations.map(location => (
                        <div id={location.tagName} className="dots">
                            <div className={`dot ${location.tagName}`}></div>
                            <div id="locationWords">{location.cityName}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
};

export default LocationMap;