import React from 'react'
import '../../App.css';
import {NavLink,Link} from 'react-router-dom'

const AppHeader = () => {
    return (
            <ul className='navbar'>
                <div>
                <NavLink to="/home" activeClassName="active"><li className='brandName'><i className="fas fa-utensils"></i>Tarmons</li></NavLink>
                </div>
               <div className="links">
               <NavLink to="/home" activeClassName="active"><li className="link">Home</li></NavLink>
                <NavLink to="/pork" activeClassName="active"><li className="link">Pork</li></NavLink>
                <NavLink to="/chicken" activeClassName="active"><li className="link">Chicken</li></NavLink>
                <NavLink to="/fish" activeClassName="active"><li className="link">Fish</li></NavLink>
                <NavLink to='/contact' activeClassName="active"><li className="link">Contact us</li></NavLink>
               </div>    
            </ul>
        
    )
}

export default AppHeader
