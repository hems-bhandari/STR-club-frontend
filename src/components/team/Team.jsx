import React from 'react'
import './Team.css'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import MemberContainer from '../ProfileContainer/MemberContainer'
import HRT from '../../assets/hrt.jpg'
import TG from '../../assets/tg.jpg'
import { Link } from 'react-router-dom'


const Team = () => {
    const members = [
            "Sangay", "Prawal", "Srijana", "Prasanna", "Shreeya", "Shrish", "Hems", "Avigya", "Bibhav", "Pranjal", "Samir", "Abhinav", "Sangya", "Raymond", "Sahir"
    ]
    return (
        <div className='container' name="team">
            <a name="team"></a>
            <h1 className='page-header'>
                Our Team
            </h1>

            <div className="coordinators">
               
                <div className="coordinator">
                    <img src={HRT} alt="" />
                    <h3>Mr. Hari Ram Tiwari </h3>
                </div>
                <div className="coordinator">
                    <img src={TG} alt="" />
                    <h3>Mr. Toya Ghimire</h3>
                    
                </div>
            </div>
            <div className="ProfileHolder">
                <div className="president box">
                    <ProfileContainer name="Sulav" position="President" image="https://media-exp1.licdn.com/dms/image/C5603AQEIyufAlEkbgg/profile-displayphoto-shrink_200_200/0/1641816144048?e=1669852800&v=beta&t=9drrkIvEtzBlU6O8wCOedUuyLWXTsz32CbBxZDrO_qo"/>
                </div>
                <div className="executive box">
                    <ProfileContainer name="Smritee" position="Vice President" />
                    <ProfileContainer name="Anish" position="Vice President" />
                    <ProfileContainer name="Arjav" position="Secretary" />
                    <ProfileContainer name="Shreyan" position="Treasurer" />
                </div>
               <Link to="">View All Members</Link>
            </div>

        </div>
    )
}

export default Team;