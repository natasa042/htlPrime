import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gallery-style.scss"

export default function Gallery(){

    const[galleryData, setGallery] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "gallery"]{
                title,
                slug,
                mainVideo{
                    asset->{
                        _id,
                        url
                    },
                
                    
                }
            }`)
            .then((data) => setGallery(data))
            .catch(console.error);
    }, []);

    return(
                
                <div className="galleryWrapper">
                    {galleryData && galleryData.map((gallery, index) => (
                        <div className="galleryInner">
                            <video
                                controls
                                src={gallery.mainVideo.asset.url}
                                alt="bastard"
                                className="galleryVideo">
                            </video>
                        </div>
))}
                </div>
    )
}
