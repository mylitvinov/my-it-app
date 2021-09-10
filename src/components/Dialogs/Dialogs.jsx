import React from "react";
import { sendMessageCreatorCreator, updateNewMessageBodyCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElemets = state.messages.map((m) => <Message message={m.message} />);
  let newMessageBody = state.messages.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreatorCreator())
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>{messagesElemets}</div>
      <div>
        <div> <textarea value = {newMessageBody} onChange = {onNewMessageChange} placeholder = 'Enter your message'></textarea> </div>
        <div> <button onClick ={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
