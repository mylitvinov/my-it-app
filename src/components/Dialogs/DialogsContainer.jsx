import React from "react";
import { sendMessageCreatorCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreatorCreator())
  }

  let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return <Dialogs updateNewMessageBody = {onNewMessageChange}
  sendMessage = {onSendMessageClick}
  dialogsPage = {state}/>
};

export default DialogsContainer;
