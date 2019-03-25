import React from "react";

const Cluster = props => {
    return (
        <div className={`peopleThree ${props.background}`} id={`peopleThree${props.num}`}>
            <div id={props.department} className={`peopleFadeIn ${props.visibility}`} onClick={props.func}>
                <div className={`depTitle ${props.depVisibility}`}>{props.dep}</div>
                {props.array.map((person, i) => (
                    (i < 5)
                        ?
                        <img src={person.picture} alt="person" className={`clusterPic ${props.clusterPic + i}`} />
                        :
                        <img src={person.picture} alt="person" className={`clusterPic ${props.hiddenPic}`} />
                    
                    // <Popup
                    //     trigger={(i < 5)
                    //      ?
                    //      <img src={person.picture} alt="person" className={`clusterPic ${props.clusterPic + i}`} />
                    //      :
                    //      <img src={person.picture} alt="person" className={`clusterPic ${props.hiddenPic}`} />}
                    //         position="right center"
                    //         closeOnDocumentClick
                    //         contentStyle={{
                    //             "border": "none",
                    //             "border-radius": "2%"
                    //         }}

                    //     >
                    //         <div className="peopleTooltip">
                    //             <div className="peopleTitle">{person.title} </div>
                    //             <div className="peopleCred">{person.credentials}</div>
                    //             <div className="peopleAbout">
                    //                 {person.about}
                    //             </div>
                    //         </div>
                    //     </Popup>
                    
                ))}

            </div>
        </div>
    )
};

export default Cluster;