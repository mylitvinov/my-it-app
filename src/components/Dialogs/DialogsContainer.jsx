import React from "react";
import {
  sendMessageCreatorCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        // let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreatorCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
