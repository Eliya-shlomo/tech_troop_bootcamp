import React, { useState } from 'react';
import { List } from './List';
import { Conversation } from './Conversation';

function Exercise2() {
  const [data, setData] = useState({
    displayConversation: null,
    conversations: [
      { with: "Laura", convo: [{ text: "Hi", sender: "self" }, { text: "You there?", sender: "self" }, { text: "Yeah, hi, what's up?", sender: "other" }] },
      { with: "Dad", convo: [{ text: "Have you finished your school work yet?", sender: "other" }, { text: "Yes.", sender: "self" }, { text: "What do you mean, yes?", sender: "other" }, { text: "??", sender: "self" }] },
      { with: "Shoobert", convo: [{ text: "Shoobert!!!", sender: "self" }, { text: "Dude!!!!!!!!", sender: "other" }, { text: "Shooooooooo BERT!", sender: "self" }, { text: "You're my best friend", sender: "other" }, { text: "No, *you're* my best friend", sender: "self" }] }
    ]
  });

  const displayConvo = (name) => {
    setData({ ...data, displayConversation: name });
  };

  if (data.displayConversation === null) {
    const contactNames = data.conversations.map(c => c.with);
    return <List contacts={contactNames} onDisplayConvo={displayConvo} />;
  }

  const currentConvoData = data.conversations.find(c => c.with === data.displayConversation);

  return (
    <Conversation 
      convo={currentConvoData.convo} 
      sender={data.displayConversation} 
      onBack={() => displayConvo(null)} 
    />
  );
}

export default Exercise2;