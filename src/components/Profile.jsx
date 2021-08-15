import React from "react";
import s from './Profile.module.css'
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyeBLv7LvP-kPXelQOpE1EQCcxZtSDw37d3QfEynRWysRvkD6RiMkS20SqpRU8shoDcO1vUQPTNkN5A&usqp=CAU" />
      </div>
      <div>ava + desription</div>
      <div>
        My posts
        <div>New post</div>
        <div className = {s.posts}>
          <div className = {s.item}>Post 1</div>
          <div className = {s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
