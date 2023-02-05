import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./picture-style.scss"

export default function PictureMT(){

    const[pictureMTData, setPictureMT] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "pictureMT"]{
                nameMT,
                imageMT{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setPictureMT(data))
            .catch(console.error);
    }, []);

    return(
        <div className="bildWrapper">
                    {pictureMTData && pictureMTData.map((pictureMT, index) => (
                        <div className="pictureWrapper">
                            <img
                                src={pictureMT.imageMT.asset.url}
                                alt="piggy"
                                className="bild">
                            </img>
                        </div>
))}
                </div>

    )
}
