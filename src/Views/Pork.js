import React from 'react'

import AppHeader from '../Components/Common/Header'
import AppFooter from '../Components/Common/Footer'
import AppPorkProducts from '../Components/Pork/PorkProducts'

const AppPork = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppHeader/>
            <AppPorkProducts/>
            <AppFooter/>
        </div>
    )
}

export default AppPork
