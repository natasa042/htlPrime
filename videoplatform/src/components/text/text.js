import React, { useState, useEffect } from "react";
import {PortableText} from '@portabletext/react';
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
                text,   
                
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
                                    className="bostTextField"
                                    >{bost.description}
                                </h1>
                        </div>
                    </article>
))}
                </div>

    )
}
