import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./picture-style.scss"

export default function PictureET(){

    const[pictureETData, setPictureET] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "pictureET"]{
                nameET,
                imageET{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setPictureET(data))
            .catch(console.error);
    }, []);

    return(
        <div className="bildWrapper">
                    {pictureETData && pictureETData.map((pictureET, index) => (
                        <div className="pictureWrapper">
                            <img
                                src={pictureET.imageET.asset.url}
                                alt="piggy"
                                className="bild">
                            </img>
                        </div>
))}
                </div>

    )
}
