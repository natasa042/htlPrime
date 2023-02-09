import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";

export default function It(){

    const[itData, setIt] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "it"]{
                    components[0]{
                        heading,
                        excerpt,
                        image{
                            asset->{
                                _id,
                                url
                            }
                        }
                    }
                }
                `)

            .then((data) => setIt(data))
            .catch(console.error);
    }, []);

    return(
        <div className="postWrapper">
            {itData && itData.map((it, index) => (
                <div>

                    <h1 key={it.index}>{it.components.heading}</h1>
                    <img
                                src={it.components.image.asset.url}
                                alt="htl"
                                className="video">
                    </img>
                    <p>{it.components.excerpt}</p>
                </div>      

))}
        </div>


)
}



