import React from 'react'
import AppNavbar from '../Components/Common/Header/Navbar/Navbar'
import AppFooter from '../Components/Common/Footer'
import AppMessage from '../Components/Contact/Message'
import MapboxGLMap from '../Components/Contact/WebMap'

const AppContact = () => {
    return (
        <div>
            <AppNavbar/>
            <AppMessage/>
            <MapboxGLMap/>
            <AppFooter/>
            
        </div>
    )
}

export default AppContact
