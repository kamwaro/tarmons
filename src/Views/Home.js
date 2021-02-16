import React from 'react'
import AppHero from '../Components/Home/Hero'
import AppCards from '../Components/Home/Cards'


const Home = () => {
    return (
        <div style={{textAlign:"center"}}>
            <AppHero/> 
            <AppCards/>  
        </div>
    )
}

export default Home