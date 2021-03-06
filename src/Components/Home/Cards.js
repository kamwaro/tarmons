import React from 'react'
import Pig from '../assets/icons/pig.png'
import Chicken from '../assets/icons/chicken.png'
import Fish from '../assets/icons/fish.png'
import {Link} from 'react-router-dom'

const AppCards = () => {

    const scrollToTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

    return (
        <ul className="homeCards">
           
            <li>
                <p className="cardHead">Pork</p>
                <section>
                <img src={Pig} width="50px" height="50px"></img>
                <p className="productName">Get the Best of your pork from us</p>
                <Link to="/pork">
               <button className="btn btn-large btn-card" onClick={scrollToTop}> View More</button>
               </Link>
                </section>       
            </li>
           
            <li>
                <p className="cardHead">Chicken</p>
                <section>
                <img src={Chicken} width="50px" height="50px"></img>
                <p className="productName">Ridiculously tantalizing chicken</p>
                <Link to="/chicken">
                <button onClick={scrollToTop}  className="btn btn-large btn-card">View More</button>
                </Link>
                </section>     
            </li>
            <li>
                <p className="cardHead">Fish</p>
                <section>
                <img src={Fish}width="50px" height="50px"  ></img>
                <p className="productName">So good you cant help but order twice!</p>
                <Link to="/fish" >
                <button onClick={scrollToTop} className="btn btn-large btn-card" >View More</button>
                </Link>
                </section>
            </li> 
        </ul>
    )
}

export default AppCards
