import React from 'react'

import AppHeader from '../Components/Common/Header'
import AppFooter from '../Components/Common/Footer'
import AppChickenProducts from '../Components/Chicken/ChickenProducts'

const AppPork = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppHeader/>
            <AppChickenProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppPork
