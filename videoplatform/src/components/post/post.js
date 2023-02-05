import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { useMediaQuery } from 'react-responsive'
import "bootstrap/dist/css/bootstrap.min.css";
import "./post-style.scss"

export default function Post(){

    const[postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainText,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return(
                <div className="postWrapper">
                    {postData && postData.map((post, index) => (
                        <div className="postInner">
                            <div className="postTitle"> 
                            {isBigScreen &&
                                <h3
                                    key={post.index}
                                    className="postTextField"
                                    >{post.mainText}
                                </h3>}  

                            {isTabletOrMobile &&
                                <h3
                                    key={post.index}
                                    className="postTextFieldSmall"
                                    >{post.mainText}
                                </h3>}                        
                            </div>
                            
                            <div className="postVideo">
                                {isBigScreen &&
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt="htl"
                                        className="video">
                                    </img>}
                                {isTabletOrMobile &&
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt="htl"
                                        className="videoSmall">
                                    </img>} 
                            </div>
                        </div>
))}
                </div>

    )
}
