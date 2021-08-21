import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hello. How are you?", likesCount: 21 },
    { id: 2, message: "It's my first post.", likesCount: 33 },
    { id: 3, message: "I am living in Saint-Petersburg", likesCount: 73 },
    { id: 4, message: "Moscow is a capital of Russia.", likesCount: 56 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          {" "}
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
