import React from 'react'

import AppNavbar from '../Components/Common/Header/Navbar/Navbar'
import AppFooter from '../Components/Common/Footer'
import AppFishProducts from '../Components/Fish/FishProducts'

const AppFish = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppNavbar/>
            <AppFishProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppFish