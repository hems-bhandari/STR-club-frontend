import React from "react";
import { Link } from "react-router-dom";
import "./PostBox.css";

const PostBox = (props) => {
  return (
    <div className="postBox">
      <div className="image">
        <img src={props.image_url} alt="" />
      </div>

      <div className="stuffs">
        <div className="title">{props.title}</div>
        <div className="button">
          <Link to={`/eventDetails/${props.id}`}>
            {" "}
            <button id="primary">Read More...</button>
          </Link>

          <i className="fa fa-share"></i>
        </div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};

export default PostBox;
