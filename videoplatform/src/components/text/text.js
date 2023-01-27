import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function Bost(){

    const[bostData, setBost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "bost"]{
                title,
                content,   
                }
            }`)
            .then((data) => setBost(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {bostData && bostData.map((bost, index) => (
                    <article>
                        <div>
                            <h1
                                key={bost.index}
                                className="textField"
                                >{bost.title}
                            </h1>
                        </div>
                    </article>
))}
                </div>

    )
}
