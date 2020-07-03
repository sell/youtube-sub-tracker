import React from 'react';
import { AiFillGithub, AiOutlineCodepen } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri'
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };

    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        if(this.state.message === "" || this.state.name === "") {
            console.log('fill out form')
            alert("Fill Out Form")
            e.preventDefault();
            return;
        } else {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            })
                .then(() => {
                    alert("Success!") 
                })
            .catch(error => alert(error));
            e.preventDefault();
        }
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, message } = this.state;
        return (
            <div className="container display-flex">
                <p className="line anim-typewriter">
                    Contact Me
                </p>
                <div className="form-group-box">
                    <div className="form-group">
                        <form name="contact" data-netlify-recaptcha="true" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="name" className="col-sm-2 col-form-label">Your Name:</label>
                                <div className="col-sm-10">
                                    <input  placeholder="John Smith" type="text" className="form-control" name="name" value={name} onChange={this.handleChange}/>
                                </div>
                            </div>
                            
                                <label htmlFor="email" className="col-sm-2 col-form-label">Your Email:</label>
                                <div className="col-sm-10">
                                    <input  type="email" placeholder="www.domain.com" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                </div> 
                            
                            <div className="form-group" >
                                <label htmlFor="message" className="col-sm-2 col-form-label">Message: </label>
                                <div className="col-sm-10">   
                                    <textarea  rows="3" placeholder="Message" className="form-control" value={message} onChange={this.handleChange} name="message"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <button className="btn btn-dark" type="submit">Send</button>
                                </div>
                            </div>
                            <div data-netlify-recaptcha="true"></div>
                        </form>
                    </div>
                    <div className="social-media-section">
                        <div className="social-media-icons">
                            <div className="social-media-github">
                                <AiFillGithub />
                            </div>
                        </div>
                        <div className="social-media-icons">
                            <div className="social-media-twitter">
                                <RiTwitterLine />
                            </div>
                        </div>
                        <div className="social-media-icons">
                            <div className="social-media-codepen">
                                <AiOutlineCodepen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;