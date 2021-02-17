import React from 'react'

const AppContactCards = () => {
    return (
        <div className="contactCards">
            <div className="contactCard">
                <a href="tel:+254719751768">
                <i className="fa fa-phone contactIcon" aria-hidden="true" ></i>
                    Call to order
                </a>
            </div>
            <div className="contactCard">
                <a href="#" className="whatsApp">
                <i className="fab fa-whatsapp contactIcon " aria-hidden="true"></i>
                Whatsapp
                </a>
            </div>
        </div>
    )
}

export default AppContactCards
