import React from "react";
import "./Footer.css";


export const Footer = () => {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  return (
  <footer>
      <div className="footer-container">
      <div className="map">
    {/*  <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <p
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact> */}
      </div>
      <div className="about">
      <h4>Who we are?</h4>
      <hr />
<p> THe Science, Technology and Robotics club (S.T.R) is a student-run
         organization under the school's watcheye. Established in 1979, this
         club is managed independently by the senior most students of
         Budhanilkantha School and currently coordinated by Mr. H R Tiwari and
         Mr. T Ghimire. The club has been actively involved in conducting
         different competitions, programs, training and providing assistance
         and opportunities to students in fields on science and technological
         advancements.</p>
      </div>
      <div className="location">
        <h4>Science, Technology and Robotics Club</h4>
        <div className="detail">
        <i className="fa fa-phone"></i> &nbsp; <a href="tel:977-1-4371637">+977-1-4371637</a>
        </div>

        <div className="detail">
          <a href="mailto:sciencetechrobotics@bnks.edu.np">
           <i className="fa fa-envelope">&nbsp;</i> sciencetechrobotics@bnks.edu.np
          </a>
        </div>

        <div className="detail">
        <i className="fa fa-address-card"></i>&nbsp; P. O. Box 1018
        </div>

        <div className="detail">
       <i className="fa fa-map-marker"></i> &nbsp;  Budhanilkantha, Kathmandu, Nepal
        </div>
        <div className="detail socials">
        <a href="http://instagram.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="http://facebook.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="http://twitter.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
        </div>
      </div>



    </div>
  </footer>
  );
};
export default Footer;
