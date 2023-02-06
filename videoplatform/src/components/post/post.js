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
                <div className="Ausgangslage">
                    <section>
                        <div>
                            <p>
                                In unserem Abschlussprojekt kümmerten wir uns um die Entwicklung
                                einer Mediathek für die HTBL-Saalfelden und um die Produktion
                                zweier Imagevideos. Die Mediathek dient dazu, um Außenstehenden 
                                einen Einblick in die verschiedenen Abteilungen zu geben.
                                Die zwei Videos zeigen zwei verschiedene Projekte, die in unseren
                                Werkstätten zustande kommen.
                            </p>
                        </div>
                    </section>
                </div>

    )
}



