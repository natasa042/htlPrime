import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./picture-style.scss"

export default function PictureBT(){

    const[pictureBTData, setPictureBT] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "pictureBT"]{
                nameBT,
                imageBT{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setPictureBT(data))
            .catch(console.error);
    }, []);

    return(
        <div className="bildWrapper">
                    {pictureBTData && pictureBTData.map((pictureBT, index) => (
                        <div className="pictureWrapper">
                            <img
                                src={pictureBT.imageBT.asset.url}
                                alt="piggy"
                                className="bild">
                            </img>
                        </div>
))}
                </div>

    )
}
