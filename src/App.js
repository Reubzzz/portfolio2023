import "./App.css";
import Navbar from "./Components/NavBar.js";
import SideNav from "./Components/SideNav.js";
import Home from "./Components/Home.js";
import Aboutpage from "./Components/About.js";
import Projectspage from "./Components/Projects.js";
import Skillspage from "./Components/Skills.js";
import Achievementpage from "./Components/Achivements.js";
import ContactPage from "./Components/Contact.js";




export default function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* SIDE NAV NEEDS MORE WORK..... */}
      {/* <SideNav/> */}

      
                <section id="home">
                  <Home/>
                </section>


                <section id="aboutme">
                    <Aboutpage/>
                </section>
                


                <section id="projects">
                <Projectspage/>
                </section>


                <section id="skills">
                <Skillspage/>
                
                </section>

                <section id="achievement">
                <Achievementpage/>
                </section>

                <section id="contact">
                  <ContactPage/>
                </section>


  



    </div>
  );
}