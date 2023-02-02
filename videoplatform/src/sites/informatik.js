import React from "react"
import Picture from "../components/picture/picture"
import Gallery from "../components/gallery/gallery"
import Text from "../components/text/text"
function Informationstechnik() {
    return (
        <div>
            <div className="banner">
                <div className="bannerInner">               
                    <p>Fachschule für</p><h1>Informationstechnik</h1>
                </div>
            </div>
            {/* Image Film oder Bild für die Unterseiten?  */}
            <Picture />
            <Text />
            <div className="gallerWrapper">
               <Gallery/> 
            </div>
                
           
        </div>
    );
}

export default Informationstechnik;