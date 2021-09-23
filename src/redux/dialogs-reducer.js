const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  // let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }],
      };

    // stateCopy.messages.push({ id: 7, message: body });

    default:
      return state;
  }
};

export const sendMessageCreatorCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
