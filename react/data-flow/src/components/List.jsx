import React from "react";
import {Contact} from './Contact.jsx'


export function List({ contacts, onDisplayConvo }) {
    return (
      <div>
        {contacts.map((name, index) => (
          <Contact 
             key={index} 
             name={name} 
             onDisplayConvo={onDisplayConvo} 
          />
        ))}
      </div>
    );
  }