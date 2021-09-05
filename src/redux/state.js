let rerenderEntireTree = () => {

}

let state = {

profilePage: {
  posts : [
    { id: 1, message: "Hello. How are you?", likesCount: 21 },
    { id: 2, message: "It's my first post.", likesCount: 33 },
    { id: 3, message: "I am living in Saint-Petersburg", likesCount: 73 },
    { id: 4, message: "Moscow is a capital of Russia.", likesCount: 56 },
  ],
  newPostText: 'Default value Test'
  
 
},

dialogsPage : {
   messages : [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Spartak - champion!" },
    { id: 4, message: "Yo" },
    { id: 5, message: "WTF?!" },
  ],
  dialogs : [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sofia" },
    { id: 5, name: "Sasha" },
    { id: 6, name: "Sem" },
  ],
},

sidebar : {
  
}
 
}

window.state = state
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = '';
 rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
 state.profilePage.newPostText = newText
 rerenderEntireTree(state)
}

export const subscribe =(observer)=> {
  rerenderEntireTree = observer // наблюдатель
}

export default state