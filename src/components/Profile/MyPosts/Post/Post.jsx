import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="data:image/jpeg;base64,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" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;