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
        <main>
            <section>
                <div>
                    {postData && postData.map((post, index) => (
                    <article>
                        <div className="videoWrapper">
                            <video
                                src={post.mainImage.asset.url}
                                alt="bastard"
                                className="video">
                            </video>
                            <p
                                key={post.mainText}
                                className="textField"
                            >
                            </p>
                        </div>
                    </article>
))}
                </div>
            </section>
        </main>

    )
}
