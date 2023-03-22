import { getPost } from "./api.js";
import create from "./module.js";

let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("postId");

const printPost = async () => {
  let response = await getPost(postId);
  let { title, body } = response;

  document
    .getElementById("post-data")
    .appendChild(create.createPost(title, body));
};
printPost();
