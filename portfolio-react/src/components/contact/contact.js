import React from 'react';
import './contact.scss';
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="title">
                <h1>Contact</h1>
                <div className="underline" ></div>        
            </div>
            <form id="form">
                <input id="name" type="text" name="name" placeholder="Name" required />
                <div id="nameError" className="error"></div>
                <input id="email" type="email" name="email" placeholder="Email" required />
                <div id="emailError" className="error"></div>
                <textarea id="message" type="text" name="message" placeholder="Message" rows="4" cols="50" required></textarea>
                <div id="messageError" className="error"></div>
                <button id="submitBtn" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Contact;