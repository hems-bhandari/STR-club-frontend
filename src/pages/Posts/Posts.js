import React, { useEffect, useState } from "react";
import PostBox from "../../components/PostBox/PostBox";
import "./Posts.css";
import FetchPosts from "../../data/Posts.json";
import { getPosts } from "../../api/API";

const Posts = () => {
  const [posts, changePosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => changePosts(res));
  }, []);

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div className="postGrid">
        {posts.map((post) => {
          return (
            <PostBox
              image_url={post.thumbnail_image}
              title={post.title}
              date={post.pub_date}
              id={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
