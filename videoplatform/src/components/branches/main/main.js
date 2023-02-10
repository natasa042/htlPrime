import React, { useState, useEffect } from "react";
import sanityClient from "../../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main(){

    const[mainData, setMain] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "main"]{
                    components[0]{
                        heading,
                        tagline,
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

            .then((data) => setMain(data))
            .catch(console.error);
    }, []);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return(
        <div className="branchWrapper">
            {mainData && mainData.map((main, index) => (
                <div>
                    <div className="heroWrapper">
                        <div className="heroTextWrapper">
                            <div className="heroTextInnerHeadline">
                            {isTabletOrMobile &&
                                <div className="small">
                                    <h1>{main.components.heading}</h1>
                                </div>}  
                            {isBigScreen &&
                                <div>
                                    <h1>{main.components.heading}</h1>
                                </div>} 

                            </div>
                        </div>
                        <div className="heroImageWrapper">
                            <img
                                        src={main.components.image.asset.url}
                                        alt="htl"
                                        className="heroBild">
                            </img>
                            <div className="heroTextWrapper">
                            <div className="heroTextInner italic">
                                <p>{main.components.tagline}</p>
                            </div>
                        </div>
                        </div>
                        <div className="textWrapper">
                            <div className="textInner">
                                <p>{main.components.excerpt}</p>
                            </div>
                        </div>
                    </div>
                </div>      

))}
        </div>


)
}



