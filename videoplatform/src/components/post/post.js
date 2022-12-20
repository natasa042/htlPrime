import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post(){

    const[postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
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
                        <span>
                            <video
                                src={post.mainImage.asset.url}
                                alt="bastard"
                                className="video"
                            />
                        </span>
                    </article>
))}
                </div>
            </section>
        </main>

    )
}