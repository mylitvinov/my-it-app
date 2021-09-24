const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    { id: 1,followed:false, fullname: 'Maxim', status: 'OK', location:{city: 'SPB', country:'Russia'} },
    { id: 2,followed:true, fullname: 'Anna', status: 'WTF', location:{city: 'SPB', country:'Russia'} },
    { id: 3,followed:false, fullname: 'Sofia', status: 'HI', location:{city: 'Astrakhan', country:'Russia'} },
  ],
  newPostText: "Default value Test",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: {...state.users}
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        }
        )
      }

    case UNFOLLOW:

    default:  return state;
  }
};

export const followAC = () => ({
  type: FOLLOW,
  userid
});
export const unfollowAC = () => ({
  type: UNFOLLOW,
  userId
});

export default usersReducer;
