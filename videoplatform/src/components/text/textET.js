import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function TextET(){

    const[textsETData, setTextsET] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "textsET"]{
                title,
                slug,
                descriptionET,   
                
            }`)
            .then((data) => setTextsET(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {textsETData && textsETData.map((textsET, index) => (
                        <div className="textInner">
                            <p key={textsET.index}
                            className="descriptionField"
                            >{textsET.descriptionET}
                            </p>
                        </div>
))}
                </div>

    )
}
