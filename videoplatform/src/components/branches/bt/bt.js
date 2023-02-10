import React, { useState, useEffect } from "react";
import sanityClient from "../../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bt(){

    const[btData, setBt] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "bt"]{
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

            .then((data) => setBt(data))
            .catch(console.error);
    }, []);

    return(
        <div className="branchWrapper">
            {btData && btData.map((bt, index) => (
                <div>
                    <div className="txtImgWrapper">
                        <div className="bildWrapper">
                            <img
                                        src={bt.components.image.asset.url}
                                        alt="htl"
                                        className="bild">
                            </img>
                        </div>
                    
                        <div className="textWrapper">
                            <div className="textInner">
                                <p>{bt.components.excerpt}</p>
                            </div>
                        </div>
                    </div>
                </div>      

))}
        </div>


)
}



