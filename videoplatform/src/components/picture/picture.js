import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./picture-style.scss"

export default function Picture(){

    const[pictureData, setPicture] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "picture"]{
                name,
                slug,
                image{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setPicture(data))
            .catch(console.error);
    }, []);

    return(
        <div className="bildWrapper">
                    {pictureData && pictureData.map((picture, index) => (
                        <div className="pictureWrapper">
                            <img
                                src={picture.image.asset.url}
                                alt="piggy"
                                className="bild">
                            </img>
                        </div>
))}
                </div>

    )
}
