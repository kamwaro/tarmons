import { Button } from 'antd'
import React from 'react'

const AppMessage = () => {
    return (
        <div className="contactMessageBox">
            <div className="contactsContainer">
                <div className="contactDetails">
                    <p><i className="fas fa-phone iconContact"></i> <i className="fab fa-whatsapp iconContact"></i></p>
                    <p className="contactCall">Call/Whatsapp</p>
                    <p className="contactNumber">+254719751768</p>

                </div>
                <div>
                    <p className="locationHeading">Get in Touch</p>
                    <p className="styleRule"></p>
                    <ul className="location">
                        <li>We are located at:</li>
                        <li>Icipe Road</li>
                        <li>Karasani,Nairobi</li>
                        <li>Opposite Regional Centre</li>
                        <li>+254719751768</li>
                        <li>info@tarmons.co.ke</li>
                    </ul>
                </div>
            </div>
            <div className="messageFormContainer">
                <div className="messageFormHeader">
                    <h3>Send us a message</h3>
                </div>
                <form className="form">
                    <div className="formBox">
                    <input type="text" className="formInput" placeholder="Your Name" />
                    <input type="text" className="formInput" placeholder="Subject" />

                    </div>
                    
                    <div className="formBox">
                    <input type="tel" className="formInput" placeholder="Phone Number" />
                    <input type="email" className="formInput" placeholder="Your Email" />
                    </div>
                   
                    <div className="textAreaBox">
                    <textarea placeholder="Your message" className="textArea" rows="5"></textarea>
                    </div>
                </form>
                <div className="messageButtonBox">
                    <Button className="messageButton">Send Message</Button>
                       
                </div>

            </div>
        </div>
    )
}

export default AppMessage





