import React from 'react';
import Landing from '../Landing/Landing'
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Team from '../../components/team/Team'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'


const Home = () => {
    return(
        
       <div className="home">      
      <Landing />
      
        <About />
        <Projects />
        <Team />
        <Contact />
       

        
            

          
       </div>
    );
}

export default Home