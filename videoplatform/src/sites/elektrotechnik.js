import React from "react"
import Et from "../components/branches/et/et"
import { useMediaQuery } from 'react-responsive'
export default function Elektrotechnik() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div id ="root">

            <div className="banner">
                <div className="bannerInner">               
                   {isTabletOrMobile &&
                    <div className="small">
                        <h1>Elektrotechnik</h1>
                    </div>}  
                {isBigScreen &&
                    <div>
                        <h1>Elektrotechnik</h1>
                    </div>} 
                </div>
            </div>
            <Et/>
        </div>
    );
}
