const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello. How are you?", likesCount: 21 },
    { id: 2, message: "It's my first post.", likesCount: 33 },
    { id: 3, message: "I am living in Saint-Petersburg", likesCount: 73 },
    { id: 4, message: "Moscow is a capital of Russia.", likesCount: 56 },
  ],
  newPostText: "Default value Test",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts : [...state.posts,newPost ],
        newPostText : ""
      }
      
      
    }

    case UPDATE_NEW_POST_TEXT: {
      
      return {
        ...state,
        newPostText : action.newText

      }
     
    }
      default:  return state;
      
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
