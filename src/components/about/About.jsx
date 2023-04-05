import React from "react";
import "./About.css";

const About = () => {
  return (
  <div>
    <a name="about"></a>
      <div className="aboutMain">
     
     <div className="Aboutcontent">
       <h1>About Us</h1>
    
       <p>
         THe Science, Technology and Robotics club (S.T.R) is a student-run
         organization under the school's watcheye. Established in 1979, this
         club is managed independently by the senior most students of
         Budhanilkantha School and currently coordinated by Mr. H R Tiwari and
         Mr. T Ghimire. The club has been actively involved in conducting
         different competitions, programs, training and providing assistance
         and opportunities to students in fields on science and technological
         advancements.
       </p>
       Connect with us on: <br />
      <div className="socials">
      <i className="fa fa-facebook"></i>
       <i className="fa fa-instagram"></i>
       <i className="fa fa-twitter"></i>
       <i className="fa fa-envelope"></i>
       
      </div>
     </div>
     <div className="image">
      <img src="https://cdn.dribbble.com/users/1539887/screenshots/15388855/media/89e7a326b6eee8d7bb0f4cfba4a05c40.jpg" alt="" />
     </div>
   </div>
  </div>
  );
};

export default About;
