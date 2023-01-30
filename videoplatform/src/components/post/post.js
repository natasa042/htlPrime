import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
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

    return(
                <div className="postWrapper">
                    {postData && postData.map((post, index) => (
                        <div className="postInner">
                            <div className="postTitle">                          
                                <h1
                                    key={post.index}
                                    className="postTextField"
                                    >{post.mainText}
                                </h1>
                            </div>
                            <div className="postVideo">
                                <video
                                    src={post.mainImage.asset.url}
                                    alt="bastard"
                                    className="video">
                                </video>
                            </div>
                        </div>
))}
                </div>

    )
}
