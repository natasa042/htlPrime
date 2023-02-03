import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function Text(){

    const[textsData, setTexts] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "texts"]{
                title,
                slug,
                description,   
                
            }`)
            .then((data) => setTexts(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {textsData && textsData.map((texts, index) => (
                        <div className="textInner">
                            <p key={texts.index}
                            className="descriptionField"
                            >{texts.description}
                            </p>
                        </div>
))}
                </div>

    )
}
