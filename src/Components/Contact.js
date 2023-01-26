import React from 'react';
import "./Contact.css";

import CV from './CV/Resume.pdf'
const Contact = () => {
  return (

    <div className='Contactpagecontainer'>
        <div className='ContactTableContainer'>
            <div className='ContactMe'>
                <h1 className='ContactMeTitle'>Contact Me</h1>
                <p className='SendMeAMessage'>Send me a message.</p>
            </div>
                    <div className='TableArea'>
                        <h2>Email Address:</h2>
                        <p>ReubenJagger29@outlook.com</p>

                        <h2>LinkedIn:</h2>
                        <p>www.linkedin.com/in/reubenjagger</p>

                        <h2>GitHub:</h2>
                        <p>https://github.com/Reubzzz</p>


                        
                        <button className="CVbutton">
                            <a href={CV} download = "ReubenCV.pdf">
                            <p>Download My CV</p>
                            </a>
                        </button>
                    </div>
        </div>
    </div>
  )
}
export default Contact