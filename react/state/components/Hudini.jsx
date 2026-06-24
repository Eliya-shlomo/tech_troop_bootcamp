import React from 'react';
import { useState } from 'react';

const Hudini = () => {

    const [show, setShow] = useState(false)
    
    const changeShow = () =>{
        if(show === true){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }

    return(
        <>
        <div>{show === true ? 'Now you see me' : 'Now you dont'}</div>
        <button onClick={changeShow}>Click me</button>
        </>
    );
};

export default Hudini;