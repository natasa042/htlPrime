import React from "react"
import Picture from "../components/picture/picture"
import Gallery from "../components/gallery/gallery"
export default function Elektrotechnik() {
    return (
        <div id ="root">
            <div className="banner">
                <div className="bannerInner">               
                   <h1>Elektrotechnik</h1>
                </div>
            </div>
            {/* Image Film oder Bild für die Unterseiten?  */}
           <Picture />
           <h2 className="center">Videos der Abschlussarbeiten 2023</h2>
           <Gallery />
        </div>
    );
}
