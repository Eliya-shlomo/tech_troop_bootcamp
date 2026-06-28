import React from "react";


export function Contact({ name, onDisplayConvo }) {
    return (
      <div onClick={() => onDisplayConvo(name)} style={{ cursor: 'pointer' }}>
        {name}
      </div>
    );
  }