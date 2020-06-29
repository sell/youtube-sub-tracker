import React from 'react';

function Contact() {
    return (
        <div className="form">
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default Contact;