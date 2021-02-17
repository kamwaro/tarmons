import React from 'react'

import AppHeader from '../Components/Common/Header'
import AppFooter from '../Components/Common/Footer'
import AppFishProducts from '../Components/Fish/FishProducts'

const AppFish = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppHeader/>
            <AppFishProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppFish