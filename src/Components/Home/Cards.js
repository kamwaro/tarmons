import React from 'react'
import Pig from './assets/icons/pig.png'
import Chicken from './assets/icons/chicken.png'
import Fish from './assets/icons/fish.png'

const AppCards = () => {
    return (
        <ul>
            <li>
                <p>Pork</p>
                <section>
                <img src={Pig} width="50px" height="50px"></img>
                <p>Get the Best of your pork from us</p>
                <button className="btn btn-large btn-card">View More</button>
                </section>       
            </li>
            <li>
                <p>Chicken</p>
                <section>
                <img src={Chicken} width="50px" height="50px"></img>
                <p>Ridiculously tantalizing chicken</p>
                <button  className="btn btn-large btn-card">View More</button>
                </section>     
            </li>
            <li>
                <p>Fish</p>
                <section>
                <img src={Fish}width="50px" height="50px"  ></img>
                <p>So good you cant help but order twice!</p>
                <button className="btn btn-large btn-card">View More</button>
                </section>
            </li> 
        </ul>
    )
}

export default AppCards
