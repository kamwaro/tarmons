import React from 'react'
import AppHero from '../Components/Home/Hero'
import AppCards from '../Components/Home/Cards'
import AppContactCards from '../Components/Home/ContactCards'
import AppProducts from '../Components/Home/Products'
import AppNavbar from '../Components/Common/Header/Navbar/Navbar'
import AppFooter from '../Components/Common/Footer'


const Home = () => {
    return (
        <div style={{textAlign:"center",marginBottom:"1em",position:"relative"}}>
            <AppNavbar/>
            <AppHero/> 
            <AppCards style={{position:"absolute",top:"10%"}}/>  
            <AppContactCards/>
            <AppProducts style={{width:"90vw", margin:"auto"}}/>
            <AppFooter/>
        </div>
    )
}

export default Home