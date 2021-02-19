import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import {NavLink} from 'react-router-dom'
import './Navbar.css'

class AppNavbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <NavLink to="/home"  style={{borderBottom: "none"}}><h1 className="navbar-logo" ><i className="fas fa-utensils"></i>Tarmons</h1></NavLink>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
}

export default AppNavbar