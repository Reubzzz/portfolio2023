import React, { useState } from 'react'; 

import "./SideNav.css";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';



  function SideNav() {
    return (
      <div className='SideNavbarcontainer'>

        {/* Social icons */}
        <div className='SideNavbaricons'>

          <ul>
                      <li className= 'LinkdinIconContainer'>
                                <a className='LinkToLinkedin' href='/'>
                    
                                          <FaLinkedin size={50} />
                                </a> 
                                        {/* <p>Linkedin</p>    */}
                      </li>


                      <li className='GithubIconContainer'>
                              <a
                                  className='LinkToGitHub'href='/'>
                                          <FaGithub size={50} />        
                             </a>
                                        {/* <p>GitHub</p> */}
                      </li>


                      <li className='EmailIconContainer'>
                              <a
                                  className='LinkToEmail' href='/'>
                                      <HiOutlineMail size={50} />     
                              </a>
                                        {/* <p>Email</p> */}
                      </li>


                      <li className='ResumeIconContainer'>
                            <a
                                className='LinkToResume'href='/'>
                                          <BsFillPersonLinesFill size={50} />
                            </a>
                                      {/* <p>Resume</p> */}
                      </li>


          </ul>
        </div>
      </div>
    );
  };
  export default SideNav;