import React from 'react'

import AppNavbar from '../Components/Common/Header/Navbar/Navbar'
import AppFooter from '../Components/Common/Footer'
import AppChickenProducts from '../Components/Chicken/ChickenProducts'

const AppPork = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppNavbar/>
            <AppChickenProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppPork
