import React from 'react'
import { Link } from "react-scroll";
import "./NavBar.css";



function Navbar() {
  return (
            <header className="nav">
                    <nav className="nav_container">
                            <ul>
                                <input type="checkbox" id="checkbox_toggle" />
                                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                                <div className="menu">
                                        
                                    <li>
                                    <Link activeClass="active" smooth spy to="home">
                                        HOME
                                    </Link>
                                    </li>

                                    <li>
                                    <Link activeClass="active" smooth spy to="aboutme">
                                        ABOUT ME
                                    </Link>
                                    </li>



                                    <li>
                                    <Link activeClass="active" smooth spy to="projects">
                                        PROJECTS
                                    </Link>
                                    </li>



                                    <li>
                                    <Link activeClass="active" smooth spy to="skills">
                                        SKILLS
                                    </Link>
                                    </li>

                                    <li>
                                    <Link activeClass="active" smooth spy to="achievement">
                                        ACHIEVEMENTS
                                    </Link>
                                    </li>


                                    <li>
                                    <Link activeClass="active" smooth spy to="contact">
                                        CONTACT ME
                                    </Link>
                                    </li>

                                </div>
                            </ul>
                    </nav>
            </header>



)
}
export default Navbar