import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyeBLv7LvP-kPXelQOpE1EQCcxZtSDw37d3QfEynRWysRvkD6RiMkS20SqpRU8shoDcO1vUQPTNkN5A&usqp=CAU" />
      </div>
      <div>ava + desription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
