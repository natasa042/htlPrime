import React from "react"
import { useMediaQuery } from 'react-responsive'
export default function Mechatronik() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div id ="root">

            <div className="banner">
                <div className="bannerInner">               
                   {isTabletOrMobile &&
                    <div className="small">
                        <h1>Mechatronik</h1>
                    </div>}  
                {isBigScreen &&
                    <div>
                        <h1>Mechatronik</h1>
                    </div>} 
                </div>
            </div>
        </div>
    );
}
