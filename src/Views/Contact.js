import React from 'react'
import AppHeader from '../Components/Common/Header'
import AppFooter from '../Components/Common/Footer'
import AppMessage from '../Components/Contact/Message'
import MapboxGLMap from '../Components/Contact/WebMap'

const AppContact = () => {
    return (
        <div>
            <AppHeader/>
            <AppMessage/>
            <MapboxGLMap/>
            <AppFooter/>
            
        </div>
    )
}

export default AppContact
