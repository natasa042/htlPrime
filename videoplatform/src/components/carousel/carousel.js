import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel-style.scss"

export default function DCarousel(){
const[carouselData, setCarousel] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "carousel"]{
                name,
                slug,
                carouselImage{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setCarousel(data))
            .catch(console.error);
    }, []);

        return (
            <Carousel autoplay>
                {carouselData && carouselData.map((carousel, index) => (
                <div className="cwrapper">
                <div>
                    <img
                        src={carousel.carouselImage.asset.url}
                        alt="piggy"
                        className="bild">
                    </img>
                </div>
                <div>
                    <img
                        src={carousel.carouselImage.asset.url}
                        alt="piggy"
                        className="bild">
                    </img>
                </div>
                <div>
                    <img
                        src={carousel.carouselImage.asset.url}
                        alt="piggy"
                        className="bild">
                    </img>
                </div>
                </div>
                ))}
            </Carousel>
        );}