import React from "react";
import './Landing.css';



const Landing = () => {

    return(
        <div className="landing">
                <div className="content">
                <p>Budhanilkantha School's</p>
                    <h1>Science, Technology and Robotics Club</h1>
                    <a href="#about"><button className="explore">Learn More!</button></a>
                </div>
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1630959305606-3123a081dada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
                
        </div>

    );
}

export default Landing;