import React from 'react'
import {Link} from 'react-router-dom'

const AppFooter = () => {

    const scrollToTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

    return (
        <div className="footerContainer">
             <div className="footer">
            <ul className="footerBar">
                <li className="footerHead">Our Contacts</li>
                <li>We are located at:</li>
                <li>Icipe Road</li>
                <li>Karasani,Nairobi</li>
                <li>Opposite Regional Centre</li>
                <li>+254719751768</li>
                <li>info@tarmons.co.ke</li>
            </ul>
            <ul className="footerBar">
                <li className="footerHead">Pork</li>
                <li>Pork Chops</li>
                <li>Pork Ribs</li>
                <li>Pork Shoulder</li>
                <li>Ham</li>
                <li>Pork belly</li>
                <li onClick={scrollToTop}><Link to="/pork">View More</Link></li>
            </ul>
            <ul className="footerBar">
                <li className="footerHead">Chicken</li>
                <li>Chicken Drumsticks</li>
                <li>Chicken Breast</li>
                <li>Chicken wings</li>
                <li>Chicken Gizzard</li>
                <li>Chicken legs</li>
                <li onClick={scrollToTop}><Link to="/chicken">View More</Link></li>
            </ul>
            <ul className="footerBar">
                <li className="footerHead">Fish</li>
                <li>Whole redsnapper</li>
                <li>Tuna</li>
                <li>Calamari</li>
                <li>Salmon fish</li>
                <li>Prawns</li>
                <li onClick={scrollToTop}><Link to="/fish">View More</Link></li>
            </ul>
        </div>

        <div >
            <ul className="socialmedia">
                <li className="socialmedia-link"><i className="fab fa-facebook"></i>Facebook</li>
                <li className="socialmedia-link"><i className="fab fa-twitter"></i>Twitter</li>
                <li className="socialmedia-link"><i className="fab fa-instagram"></i>Instagram</li>
            </ul>

        </div>
        <div className="copyright">
            <p>Tarmons Caterers &amp; Investments &copy; 2021</p>
        </div>
       

        </div>
       
    )
}

export default AppFooter
