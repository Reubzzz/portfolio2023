import React from 'react';
import './Home.css';
import RainCloud from './ThreeJs/RainCloud';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Home = () => { 
  return (
    
    <div className="HomeContainer">
      <div className="raincloudcontainer">
        <RainCloud/>
      </div>
      <div className="textContainer">
        <div className="TitleContainer">
           <h2>I Am A Software Developer</h2>
         </div>
            <div className="Homeblurb">
              <p> I have 1 years of experience in web development and game development.
                  Currently, I love to work on web application using technologies like
                  React, Threejs, and Mongodb. while also playing around with Unity.
            </p>
           </div>

                <div  className="Aboutmeshortcut">
                 <Link to="aboutme" smooth duration={500}>
                 <button class="aboutbutton">About Me
                  <HiArrowNarrowRight size={25} className="ml-3" />
                  </button>
                </Link>

        
      
               </div> 
      </div>
         
        
   </div>


  );
};
export default Home;