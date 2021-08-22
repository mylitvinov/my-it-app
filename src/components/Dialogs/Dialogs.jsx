import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sofia" },
    { id: 5, name: "Sasha" },
    { id: 6, name: "Sem" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Spartak - champion!" },
    { id: 4, message: "Yo" },
    { id: 5, message: "WTF?!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElemets = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>{messagesElemets}</div>
    </div>
  );
};

export default Dialogs;
