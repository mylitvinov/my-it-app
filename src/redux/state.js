const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello. How are you?", likesCount: 21 },
        { id: 2, message: "It's my first post.", likesCount: 33 },
        { id: 3, message: "I am living in Saint-Petersburg", likesCount: 73 },
        { id: 4, message: "Moscow is a capital of Russia.", likesCount: 56 },
      ],
      newPostText: "Default value Test",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Spartak - champion!" },
        { id: 4, message: "Yo" },
        { id: 5, message: "WTF?!" },
      ],
      dialogs: [
        { id: 1, name: "Maxim" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Sofia" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Sem" },
      ],
    },

    sidebar: {},
  },
  _callSubscribes() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscribes = observer; // наблюдатель
  },
  dispatch(action) {
    // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

       this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscribes(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscribes(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT,
    newText: text,
  });
export default store;

window.store = store;
