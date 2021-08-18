import React from "react";

import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyeBLv7LvP-kPXelQOpE1EQCcxZtSDw37d3QfEynRWysRvkD6RiMkS20SqpRU8shoDcO1vUQPTNkN5A&usqp=CAU" />
      </div >
      <div className = {s.descriptionBlock}>ava + desription</div>
    </div>
  );
};

export default ProfileInfo;
