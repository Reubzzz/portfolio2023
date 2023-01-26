import React from 'react';
import "./Skills.css";



const Skills = () => {
  return (
    <div className="SkillsMainContainer">
              <div className="skillscontainer">
                        <div className="skillstitle">
                        <h1>Skills.</h1>
                        </div>

                        <div className="skillsblurb">
                            <p>
                                I enjoy learning new skills and technologies, here is a list of some 
                                of the technologies im most comfortable with.
                            </p>
                        </div>

                        <div className="skillsgrid">

                            <div class="skillgrid-container">
                                <div class="skillgrid-item"><p>HTML</p></div> 
                                <div class="skillgrid-item"><p>CSS</p></div> 
                                <div class="skillgrid-item"><p>JAVASCRIPT</p></div>   
                                <div class="skillgrid-item"><p>REACT</p></div> 
                                <div class="skillgrid-item"><p>NODE</p></div> 
                                <div class="skillgrid-item"><p>C#</p></div> 
                                <div class="skillgrid-item"><p>GITHUB</p></div> 
                                <div class="skillgrid-item"><p>THREEJS</p></div> 
                                <div class="skillgrid-item"><p>UNITY ENGINE</p></div>   
                                <div class="skillgrid-item"><p>POINT CLOUD</p></div> 
                                <div class="skillgrid-item"><p>ARTIFICIAL INTELLIGENCE</p></div> 
                                <div class="skillgrid-item"><p>AGILE METHODOLOGY</p></div> 
                            </div>
                        </div>
                </div>
        </div>

  );
};
export default Skills;