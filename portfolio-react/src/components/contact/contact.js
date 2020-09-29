import React, {useState} from 'react';
import './contact.scss';
import axios from "axios";
import Spinner from '../spinner/spinner';
import Email from "../../images/email_mini.svg";
import Phone from "../../images/phone_mini.svg";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitStatus, setFormSubmitStatus] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let formData = {
            senderName: name,
            senderEmail: email,
            message: message
        }
        try {
            let res = await axios.post('https://website-email-sender.herokuapp.com/', formData);
            if(res.status === 200){
                setFormSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false);
            }

        } catch (error) {
            setFormSubmitStatus('error');
            setIsLoading(false);
        }
    }
    
    return ( 
        <div className="contact">
            <div className="title">
                <h1>Contact</h1>
                <div className="underline" ></div>        
            </div>
            <div className="info">
                <div className="email">
                    <img src={Email} alt=""/>
                    <p>avnvbhatta@gmail.com</p>
                </div>
                <div className="phone">
                    <img src={Phone} alt=""/>
                    <p>515-864-1478</p>
                </div>
            </div>
            <div className="or">-or-</div>
            <form id="form" onSubmit={handleSubmit}>

                <p>Send a quick message</p>
                <input  type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>
                
                <input id="email" type="email" name="email" placeholder="Email" required value={email}  onChange={(e) => setEmail(e.target.value)}/>
                
                <textarea id="message" type="text" name="message" placeholder="Message" rows="4" cols="50" required value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                
                {isLoading ? <Spinner /> : <button id="submitBtn" type="submit">Submit</button>} 
            </form>
            
            {
                formSubmitStatus && <div className={formSubmitStatus}>
                                        {formSubmitStatus === 'success' ? 
                                        <div><div>Thank you for reaching out! </div> <div>I will get back to you shortly</div></div>
                                        : <div><div>Something went wrong.</div><div>Please try again later.</div></div>}
                                        </div>
                                    
            }
            
            

        </div>
     );
}
 
export default Contact;