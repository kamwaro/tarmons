import React from 'react'
import {useState} from 'react'
import emailjs from 'emailjs-com';

const AppMessage = (e) => {

    const [name, setName] = useState("");
    const [tel, setTel]  = useState("");
    const [subject, setSubject]  = useState("");
    const [email, setEmail]  = useState("");
    const [message, setMessage]  = useState("");


    const handleChange = (event) => {
        event.target.name=="name" 
        ? setName(event.target.value)
        : event.target.name=="subject"
        ? setSubject(event.target.value)
        : event.target.name=="tel"
        ? setTel(event.target.value)
        : event.target.name=="email" 
        ? setEmail(event.target.value)
        : event.target.name=="message" 
        ? setMessage(event.target.value)
        : console.log("error")

      };


  function sendEmail(e) {
    e.preventDefault();

    console.log('clicked!!')

                    // 'your_service_id','YOUR_TEMPLATE_ID',"YOUR_USER_ID"
    emailjs.sendForm('service_lepqnso', 'template_ugxjj2t', e.target, 'user_1p04R3a5CGUwaEVCdA0X8')
      .then((result) => {
        console.log(result.text);
        result.text ==="OK" ? console.log("it worked") : alert("didnt work")
      
      }, (error) => {
          console.log(error.text);
      });

      setName("")
      setMessage("")
      setTel("")
      setSubject("")
      setEmail("")
  }

    
  




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
                <form className="form" id="contact-form" onSubmit={sendEmail}>
                    <div className="formBox">
                    <input type="text" className="formInput"  name="name" placeholder="Your Name" onChange={(e) => handleChange(e)} value={name}/>
                    <input type="text" className="formInput" name="subject" placeholder="Subject" onChange={(e) => handleChange(e)} value={subject}/>

                    </div>
                    
                    <div className="formBox">
                    <input type="tel" className="formInput" name="tel" placeholder="Phone Number" onChange={(e) => handleChange(e)} value={tel}/>
                    <input type="email" className="formInput" name="email" placeholder="Your Email"  onChange={(e) => handleChange(e)}
                value={email} />
                    </div>
                   
                    <div className="textAreaBox">
                    <textarea className="textArea" name="message"  placeholder="Your message"  rows="5" onChange={(e) => handleChange(e)} value={message}></textarea>
                    </div>
                    <div className="messageButtonBox">
                    <input type="submit" className="messageButton" value="Submit"/>
                       
                </div>
                </form>
                

            </div>
        </div>
    )

}


export default AppMessage





