import React from 'react'
import './ProfileContainer.css'

const ProfileContainer = (props) => {
  return (
    <div className='ProfileContainer'>
   {props.showImage === "false" ? null :  <img src={props.image} alt="A" width='100px'/>}
   <div className="info">
   <p id='name'>{props.name}</p>
    <p id='designation'>{props.position}</p>
   </div>
</div>
  )
}

export default ProfileContainer