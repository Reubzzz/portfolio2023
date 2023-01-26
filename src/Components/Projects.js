import React from 'react';
import "./Projects.css";

import PortalImg from './Imgs/PortalImg.PNG';
import PixelGame from './Imgs/2dGame.PNG'
import ThrillCapitalImg from './Imgs/ThrillCapitalImage.png'
import PortfolioImg from './Imgs/PortfolioImg.png';




import {Link} from 'react-router-dom'

const projects = () => {
  return (

    <div className="pagecontainer">
        
        <div className="projectscontainer">
                    <div className="projectTitle">
                        <h1>Projects</h1>
                    </div>
                    <div className="projectdiscription">
                        <p>Check out some of the projects i have worked on.</p>
                    </div>



                    
                        {/* GRID AREA */}
                        <div class="grid-container">
{/* THREEJS AREA */}
                                        <div class="gridThreeJS">
                                            <div className="Portal">
                                                <img class="PortalImg" src={PortalImg} />

                                                <div className="THREEJSUnderlay">
                                                    <h1>3D Animation</h1>
                                                </div>

                                                    <div class="THREEJSOverlay">
                                                        <h2>ThreeJs Portal</h2>
                                                        <p>Portal I Learnt To Create With ThreeJS.</p>
                                                        
                                                        
                                                            <button className='Demo'>
                                                                <Link to="/ThreeJsDemo" className= "DemoLink" >
                                                                    <p>Demo</p>
                                                                </Link>
                                                            </button>
                                                        
                                                    </div>
                                            </div>
                                        </div> 

{/* C# UNITY AREA */}
                            <div class="gridCSharp">
                                    <div class="CSharp">
                                        <img class="CSharpImage" src={PixelGame} />
                                                <div className="CSharpUnderlay">
                                                    <h1>Pixel Game</h1>
                                                </div>
                                            <div class="CSharpOverlay">
                                                <h2>C# Game</h2>
                                                <p>2D Game Created With C# In Unity</p>

                                                {/* <a href='/'>
                                                    <button className='Demo'>
                                                        Demo
                                                    </button>
                                                </a> */}

                                            </div> 
                                    </div>
                            </div>


{/* THRILLCAPITAL */}
<div class="gridThrillCapital">
                                    <div class="ThrillCapital">
                                        <img class="ThrillCapitalImage" src={ThrillCapitalImg} />
                                                
                                                <div className="ThrillCapitalUnderlay">
                                                    <h1>ThrillCapital</h1>
                                                </div>
                                            <div class="ThrillCapitalOverlay">
                                                <h2>Perrinn's Project 424</h2>
                                                <p>Enviroment Created From PointCloud For ThrillCapital</p>

                                                {/* <a href='/'>
                                                    <button className='Demo'>
                                                        Demo
                                                    </button>
                                                </a> */}
                                          </div> 
                                    </div>
</div>




{/* ReactPortfolio */}
<div class="gridReactPortfolio">
                                    <div class="ReactPortfolio">
                                        <img class="ReactPortfolioImage" src={PortfolioImg} />
                                        
                                        <div className="ReactPortfolioUnderlay">
                                                    <h1>Portfolio</h1>
                                                </div>
                                            <div class="ReactPortfolioOverlay">
                                                <h2>React Portfolio</h2>
                                                <p>Portfolio Created With React JS</p>

                                                {/* <a href='/'>
                                                    <button className='Demo'>
                                                        <p>Demo</p>
                                                    </button>
                                                </a> */}
                                            </div> 
                                    </div>
</div>


                            {/* <div class="grid-item">EMPTY</div>
                            <div class="grid-item">EMPTY</div>   */}
                        </div>
                    </div>
    </div>























  );
};
export default projects;