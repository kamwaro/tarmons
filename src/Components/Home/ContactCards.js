import React from 'react'

const AppContactCards = () => {
    return (
        <div className="contactCards">
             <a href="tel:+254719751768" style={{flexGrow:1}}>
            <div className="contactCard">
               
                <i className="fa fa-phone contactIcon" aria-hidden="true" ></i>
                    Call to order
               
            </div>
            </a>
            <a href="https://wa.me/+254719751768" target="_blank" rel="noopener noreferrer" className="whatsApp" style={{flexGrow:1}}>
            <div className="contactCard">
               
                <i className="fab fa-whatsapp contactIcon " aria-hidden="true"></i>
                Whatsapp
               
            </div>
            </a>
        </div>
    )
}

export default AppContactCards
