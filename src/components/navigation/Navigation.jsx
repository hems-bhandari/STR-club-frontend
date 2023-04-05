import React from 'react'
import './Navigation.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const host = window.location.host;

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
<img width={"60"} src="https://cdn.discordapp.com/attachments/988490207932342345/990957255497232454/logo-interim-removebg-preview2.png" alt="" /> 
    <a href="/#home" className="">Login</a>
    <a href="/posts" className="">Blog</a>
    <a href="/#contact">Contact</a>
    <a href="/#team">Team</a>
    <a href="/#events">Events</a>
    <a href="/#about">About</a>
    <a href="/#home" className="">Home</a>
   
   
   
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
  </div>
  );
}

export default Navigation;