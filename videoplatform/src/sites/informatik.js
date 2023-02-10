import React from "react"
import It from "../components/branches/it/it"
import Gallery from "../components/gallery/gallery"
import { useMediaQuery } from 'react-responsive'
export default function Informationstechnik() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div>
            
            <div className="banner">
                <div className="bannerInner"> 
                {isTabletOrMobile &&
                    <div className="small">
                        <p>Fachschule für</p><h1>Informationstechnik</h1>
                    </div>}  
                {isBigScreen &&
                    <div>
                        <p>Fachschule für</p><h1>Informationstechnik</h1>
                    </div>}             
                    
                </div>
            </div>


            <It/>
            <h1 className="aaHeadline">Abschlussarbeiten 2023</h1>
            <div className="galleryWrapper">
                <div className="gallery"><Gallery/></div> 
            </div>
                
           
        </div>
    );
}