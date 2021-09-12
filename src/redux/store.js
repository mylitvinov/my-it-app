import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: "",
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscribes(this._state);
  },
};




export default store;

window.store = store;
