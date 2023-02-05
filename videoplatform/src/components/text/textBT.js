import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function TextBT(){

    const[textsBTData, setTextsBT] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "textsBT"]{
                title,
                slug,
                descriptionBT,   
                
            }`)
            .then((data) => setTextsBT(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {textsBTData && textsBTData.map((textsBT, index) => (
                        <div className="textInner">
                            <p key={textsBT.index}
                            className="descriptionField"
                            >{textsBT.descriptionBT}
                            </p>
                        </div>
))}
                </div>

    )
}
