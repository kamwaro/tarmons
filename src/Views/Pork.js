import React from 'react'

import AppNavbar from '../Components/Common/Header/Navbar/Navbar'
import AppFooter from '../Components/Common/Footer'
import AppPorkProducts from '../Components/Pork/PorkProducts'

const AppPork = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppNavbar/>
            <AppPorkProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppPork
