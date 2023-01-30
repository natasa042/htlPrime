import React, { useState, useEffect } from "react";
import {PortableText} from '@portabletext/react';
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./text-style.scss"
export default function Text(){

    const[textData, setText] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "text"]{
                title,
                slug,
                text,   
                
            }`)
            .then((data) => setText(data))
            .catch(console.error);
    }, []);

    return(
                <div className="textWrapper">
                    {textData && textData.map((text, index) => (
                    <article>
                        <div>
                        <h1
                                    key={text.index}
                                    className="TextField"
                                    >{text.title}
                                </h1>
                        </div>
                    </article>
))}
                </div>

    )
}
