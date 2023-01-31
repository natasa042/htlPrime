import React from "react"
import Picture from "../../components/picture/picture"
import Gallery from "../../components/gallery/gallery"
import Text from "../../components/text/text"
import './informatik-style.scss';
function Informationstechnik() {
    return (
        <div>
            <div className="banner">
                    <svg className ="logoInf"id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 331">
                        <path className="cls-1" d="m.6,11.7c1.2,20.6,6.1,48.6,12.3,70.2,8.3,28.6,22.9,57,38.4,75.1,21.8,25.2,45.3,39.2,77.3,46.2,13.7,3,47.3,3.3,61,.5,7.8-1.6,26.5-7.1,27.5-8.2.8-.7-8.5-14.8-11.7-17.9l-3-2.8-2.8,2c-10.8,7.7-23.3,11.3-39.3,11.3-19,0-33.1-5-45.2-16-19-17.5-29.1-46.2-31.8-90.4-1.3-21,1.1-62.4,4.6-79L88.5,0H0l.6,11.7Z"/>
                        <path className="cls-1" d="m233.4,12.1c6.3,43.8,4.8,87.6-3.8,116.9-1.4,4.7-2.7,9.3-3,10.2-.4,1.2.9,2.4,4.9,4.4,7.5,3.8,20.9,12.6,25.7,16.9,2.2,2,4.5,3.5,5,3.3,1.8-.5,11-11.9,17-20.8,22.4-33.4,37.9-85,40.4-135.3l.4-7.7h-88.3l1.7,12.1h0Z"/>
                        <path className="cls-1" d="m137.3,136.1c-9,1.2-15.2,2.5-25.2,5.5l-8.7,2.7,2.4,4.6c2.6,5.2,10.5,16.1,11.5,16.1.4,0,3.4-1.6,6.6-3.5,21.5-13,55-11.9,76,2.4,25.8,17.6,39,58.3,37,114.1-.3,10.2-1.2,23.7-2,30s-1.8,14.1-2.2,17.2l-.7,5.8h43.6c24,0,43.8-.3,44-.7.8-1.4-1.3-24.6-3.3-37.3-11.1-68.8-41.6-119-86-142-15.5-7.9-28.3-12-45.5-14.5-10.8-1.6-36.8-1.8-47.5-.4h0Z"/>
                        <path className="cls-1" d="m50.8,181.8C22.7,214.5,3.6,266.9.6,319.2l-.6,11.8h88.5l-.6-3.3c-3.2-18-4-29.8-4-57.7-.1-26.3.2-30.8,2.1-41.8,1.3-6.8,3.6-16.1,5.1-20.8l2.8-8.4-4.3-2.1c-6.7-3.2-18.3-11-25.6-17.3l-6.6-5.6-6.6,7.8h0Z"/>
                    </svg>
                <div className="bannerInner">               
                    <p>Fachschule für</p><h1>Informationstechnik</h1>
                </div>
            </div>
            {/* Image Film oder Bild für die Unterseiten?  */}
           <h2 className="center">Videos der Abschlussarbeiten 2023</h2>
           <Gallery/>
           <Picture />
        </div>
    );
}

export default Informationstechnik;