import React, { useState, useEffect } from "react";
import sanityClient from "../../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mt(){

    const[mtData, setMt] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "mt"]{
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

            .then((data) => setMt(data))
            .catch(console.error);
    }, []);

    return(
        <div className="branchWrapper">
            {mtData && mtData.map((mt, index) => (
                <div>
                    <div className="txtImgWrapper">
                        <div className="bildWrapper">
                            <img
                                        src={mt.components.image.asset.url}
                                        alt="htl"
                                        className="bild">
                            </img>
                        </div>
                    
                        <div className="textWrapper">
                            <div className="textInner">
                                <p>{mt.components.excerpt}</p>
                            </div>
                        </div>
                    </div>
                </div>      

))}
        </div>


)
}



