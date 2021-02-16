import React from 'react'
import '../../App.css';

const AppHeader = () => {
    return (
            <ul className='navbar'>
                <div>
                <li className='brandName'><i className="fas fa-utensils"></i>Tarmons</li>
                </div>
               <div className="links">
               <li className="link">Home</li>
                <li className="link">Pork</li>
                <li className="link">Chicken</li>
                <li className="link">Fish</li>
                <li className="link">Contact us</li>
               </div>    
            </ul>
        
    )
}

export default AppHeader
