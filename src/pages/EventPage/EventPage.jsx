import React from 'react';
import "./EventPage.css";
import events from '../../data/Posts.json';
import {useParams, Link} from 'react-router-dom'
import ScrollToTop from '../../components/scrollToTop';
import { useEffect } from 'react';
import { getPost } from '../../api/API';
import { useState } from 'react';

const EventPage = ({match}) => {
  const id = useParams();
  const [post,changePost] = useState({})
  
  useEffect(() => {
    console.log(id)
    getPost(id.id).then(res => changePost(res))
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div className='EventPage'>
       <h1>{post.title}</h1>
      <img src={post.thumbnail_image} alt="" /><br />
      <i>{post.pub_date}</i> <br /> <br />
      <b><i><h4>{post.snippet}</h4></i></b>
       
        <p>{post.details}</p>
      <Link to='/posts'>  <button id="primary"> <i className="fa fa-arrow-left"></i>&nbsp; All Posts</button></Link>
    </div>
  )
}

export default EventPage;