import React from "react";

function Conversation({ convo, sender, onBack }) {
    return (
      <div>
        <button className="back" onClick={onBack}>Back</button>
        
        {convo.map((message, index) => (
          <div key={index}>
            <span className="sender">
              {message.sender === "self" ? "Me" : sender}:
            </span>
            {" " + message.text}
          </div>
        ))}
      </div>
    );
  }


  export default Conversation