import React from 'react'
import './Projects.css'
import ProjectBox from '../ProjectBox/ProjectBox'
import events from '../../data/Events.json'

const Projects = () => {

  const scrollEvents = (direction) => {
    const div = document.querySelector(".upcoming")
   direction == "up" ? div.scrollTop = div.scrollTop-100 : div.scrollTop = div.scrollTop+100;
    
  }

  
  return (
   <div className="events">
    <a name="events" ></a>

    <div className="eventsContent">
<div className="left">
<h1>Events</h1>
<img src="https://cdni.iconscout.com/illustration/premium/thumb/business-presentation-3611249-3126418.png" alt="" />
</div>


    <div className="right">
    <div className="upArrow">
    <i className="fa fa-arrow-up" onClick={() => scrollEvents("up")}></i>
    </div>
    <div className="upcoming">
   

       {events.events.map(event =>  
         <ProjectBox name={event.name} date={event.date} details={event.snippet} img={event.image_src} id={event.id} />
       
)}
       

    </div>
    <div className="downArrow">
    <i className="fa fa-arrow-down" onClick={() => scrollEvents("down")}></i>
    </div>

    </div>
    </div>
  

  
   </div>
  )
}

export default Projects