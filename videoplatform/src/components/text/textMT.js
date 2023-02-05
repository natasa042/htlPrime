import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function TextMT(){

    const[textsMTData, setTextsMT] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "textsMT"]{
                title,
                slug,
                descriptionMT,   
                
            }`)
            .then((data) => setTextsMT(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {textsMTData && textsMTData.map((textsMT, index) => (
                        <div className="textInner">
                            <p key={textsMT.index}
                            className="descriptionField"
                            >{textsMT.descriptionMT}
                            </p>
                        </div>
))}
                </div>

    )
}
