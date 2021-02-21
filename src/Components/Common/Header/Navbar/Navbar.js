import React, { useState } from 'react';
import { MenuItems } from "./MenuItems"
import {NavLink} from 'react-router-dom'
import './Navbar.css'


const AppNavbar  =  () =>  {

    let [clicked,setClicked] = useState(false)
    // state = { clicked: false }

    const handleClick = () => {
        setClicked( !clicked )
    }
  
  
    
        return(
            <nav className="NavbarItems">
                <NavLink to="/home"  style={{borderBottom: "none"}}><h1 className="navbar-logo"><i className="fas fa-utensils"></i>Tarmons</h1></NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu activated' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url}>
                                {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }


export default AppNavbar