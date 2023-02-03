import React, { useState, useEffect, Component } from "react";
import ReactDOM from 'react-dom';
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider-style.scss"
import { Carousel } from 'react-responsive-carousel';


export default function Slider(){

    const[sliderData, setSlider] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "slider"]{
                slug,
                sliderImage{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setSlider(data))
            .catch(console.error);
    }, []);
   class DemoCarousel extends Component{
        render() {
    return(
        <div className="sliderWrapper">
            <div className="sliderOuter">
                <div className="sliderInner">
                    {sliderData && sliderData.map((slider, index) => (
                        <div className="sliderImageWrapper">
                            <Carousel showArrows={true}>
                            <img
                                src={slider.sliderImage.asset.url}
                                alt="piggy"
                                className="sliderImage">
                            </img>
                            </Carousel>
                        </div>
))}             </div>                 
            </div>
        </div>
    )
}
};
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
}
