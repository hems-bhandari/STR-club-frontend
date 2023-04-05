import React from 'react'
import './ProjectBox.css'
import { Link } from 'react-router-dom'

const ProjectBox = (props) => {
  return (
    <div className="projectbox box">
    <div className="image">
        <img src={props.img} alt="" />
    </div>
    <div className="text">
        <h5>{props.name}</h5>
        <i>{props.date} </i>
        <p>{props.details}</p>
        <Link to={`/eventDetails/${props.id}/`}> <button id="primary">View</button></Link>

    </div>
</div>
  )
}

export default ProjectBox;