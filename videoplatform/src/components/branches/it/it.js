import React, { useState, useEffect } from "react";
import sanityClient from "../../../client.js";
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
        <div className="branchWrapper">
            {itData && itData.map((it, index) => (
                <div>
                    <div className="txtImgWrapper">
                        <div className="bildWrapper">
                            <img
                                        src={it.components.image.asset.url}
                                        alt="htl"
                                        className="bild">
                            </img>
                        </div>
                    
                        <div className="textWrapper">
                            <div className="textInner">
                                <p>{it.components.excerpt}</p>
                            </div>
                        </div>
                    </div>
                </div>      

))}
        </div>


)
}



