import React, { useState, useEffect } from "react";
import sanityClient from "../../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Et(){

    const[etData, setEt] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "et"]{
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

            .then((data) => setEt(data))
            .catch(console.error);
    }, []);

    return(
        <div className="branchWrapper">
            {etData && etData.map((et, index) => (
                <div>
                    <div className="txtImgWrapper">
                        <div className="bildWrapper">
                            <img
                                        src={et.components.image.asset.url}
                                        alt="htl"
                                        className="bild">
                            </img>
                        </div>
                    
                        <div className="textWrapper">
                            <div className="textInner">
                                <p>{et.components.excerpt}</p>
                            </div>
                        </div>
                    </div>
                </div>      

))}
        </div>


)
}



