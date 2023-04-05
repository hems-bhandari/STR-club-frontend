import axios from "axios";

const apiUrl = "http://localhost:8000/api";

const getPosts = async () => {
  let response = await axios.get(`${apiUrl}/get_posts`).then((res) => res.data);
  return response;
};

const getPost = async (post_id) => {
  let response = await axios
    .get(`${apiUrl}/get_post/${post_id}`)
    .then((res) => res.data);
  return response;
};

export { getPosts, getPost };
