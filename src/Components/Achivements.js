import React from 'react';
import {Link} from 'react-router-dom'
import "./Achivements.css";

import Level4 from "./Imgs/Level4.jpg"
import Level5 from "./Imgs/Level5.PNG"
import Level6 from "./Imgs/Level6.PNG"

import AlmostCompleted from "./Imgs/AlmostCompleted.png"

const Achievements = () => {
    return (
      <div className="AchivementsMainContainer">


{/* Achivement Area */}

                                <div className="achivementcontainer">
                                    <div className="achivementtitle">
                                        <h1>Achievements.</h1>
                                    </div>

                                    <div className="achivementblurb">
                                        <p>
                                            Qualifications and Certificates. 
                                        </p>
                                    </div>

                                    <div className="achivementgrid">
                                        <div class="achivementgrid-container">



{/*LEVEL 4  */}
                                            <div class="AchivementLevel4grid-item">
                                                <img class="Achivement4" src={Level4} /> 
                                                    <div class="Achivement4Overlay">
                                                        <p>
                                                        Certificate in Information Technology Essentials Level 4
                                                        </p>

                                                        
                                                            <button className='ViewCert'>
                                                                <Link to="/Level4Page" className= "ViewCertLink" >
                                                                    View Certificate
                                                                </Link>  
                                                            </button>
                                                        
                                                    </div>
                                            </div> 


{/*LEVEL 5  */}
                                        <div class="AchivementLevel5grid-item">
                                            <img class="Achivement5" src={Level5} /> 
                                                <div class="Achivement5Overlay">
                                                    <p>
                                                    Certificate in Digital Technology Product Solutions Level 5
                                                    </p>
                                                            <button className='ViewCert'>
                                                                <Link to="/Level5Page" className= "ViewCertLink" >
                                                                    View Certificate
                                                                </Link>  
                                                            </button>
                                                </div>
                                            
                                        
                                        </div>    

{/*LEVEL 6  */}
                                        <div class="AchivementLevel6grid-item">
                                                <img class="Achivement6" src={Level6} /> 
                                                <div class="Achivement6Overlay">
                                                    <p>
                                                    Certificate in Applied Digital technology Product Solutions Level 6
                                                    </p>
                                                            <button className='ViewCert'>
                                                                <Link to="/Level6Page" className= "ViewCertLink" >
                                                                    View Certificate
                                                                </Link>  
                                                            </button>

                                                </div>
                                        </div> 


{/* POSTGRADUATE */}
                                        <div class="AchivementPostGradgrid-item">
                                                <img class="AchivementPostGrad" src={AlmostCompleted} /> 
                                                <div class="AchivementPostGradOverlay">
                                                    <p>
                                                    Postgraduate Certificate in Human Potential for the Digital Economy
                                                    </p>
                                                        {/* <a href='/'>
                                                        <button className='ViewCert'>
                                                            View Certificate
                                                        </button>
                                                    </a> */}

                                                </div>
                                        </div> 
{/* MICROCREDITAL */}
                                        <div class="AchivementMicrocredgrid-item">
                                                <img class="AchivementMicrocred" src={AlmostCompleted} /> 
                                                <div class="AchivementMicrocredOverlay">
                                                    <p>
                                                    Disruptive Technologies Micro-credential
                                                    </p>
                                                        {/* <a href='/'>
                                                        <button className='ViewCert'>
                                                            View Certificate
                                                        </button>
                                                    </a> */}

                                                </div>
                                        </div> 









                                    </div>
                                </div>
                                </div>

    </div>

    );
};
export default Achievements;