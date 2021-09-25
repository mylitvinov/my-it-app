import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fotoUrl: "",
        followed: false,
        fullName: "Maxim",
        status: "OK",
        location: { city: "SPB", country: "Russia" },
      },
      {
        id: 2,
        fotoUrl: "",
        followed: true,
        fullName: "Anna",
        status: "WTF",
        location: { city: "SPB", country: "Russia" },
      },
      {
        id: 3,
        fotoUrl: "",
        followed: false,
        fullName: "Sofia",
        status: "HI",
        location: { city: "Astrakhan", country: "Russia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.fotoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
