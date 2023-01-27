import React from "react"
import Picture from "../../components/picture/picture"
import Gallery from "../../components/gallery/gallery"
import Bost from "../../components/text/text"
import './informatik-style.scss';
function Informationstechnik() {
    return (
        <div id ="root">
            <div className="banner">
                <div className="bannerInner">
                    <p>Fachschule für</p><h1>Informationstechnik</h1>
                </div>
            </div>
            {/* Image Film oder Bild für die Unterseiten?  */}
           <Picture />
           <h2 className="center">Videos der Abschlussarbeiten 2023</h2>
           <Gallery />
           <Bost />
        </div>
    );
}

export default Informationstechnik;