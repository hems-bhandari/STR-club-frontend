import React from 'react';
import './ProfileContainer.css'

const MemberContainer = (props) => {
  return (
    <div className="memberContainer">
        <div className="image">
             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
        </div>
        <div className="name">{props.name}</div>
    </div>
  )
}

export default MemberContainer