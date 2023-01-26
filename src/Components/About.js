import React from "react";
import"./About.css"


const About = () => { 
  return (
    <div className="Aboutcontainer">

      <div className="container">
                <div className="sectiontitle">
                  <h1>About.</h1>
                </div>

                <div className="Title">
                  <h2>
                    Hi. I'm Reuben Jagger, welcome to my page. Please take a
                    look around.
                  </h2>
                </div>

                <div className="blurb">
                      <p>
                      "I am a software developer with experience building responsive and scalable web applications.
                      I know agile development and am interested in upcoming/exciting new technologies. 
                      I am always looking to learn new skills and continue to grow within the software community." 

                      </p>
                </div>
      </div>
  </div>
  );
};
export default About;