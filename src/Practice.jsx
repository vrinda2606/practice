import React from "react";
const Practice = () => {
    return (<>

    </>);
}

export default Practice;

/*
For applying dynamic time to website

import React, { useState } from "react";

const Practice = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    },1000);
    return (<>
          <h1>{time}</h1>
    </>);
}

export default Practice;

*/


/*

For Context API

import React , {createContext} from "react";
import ComA from './ComA';
const FirstName = createContext();

const Practice = () => {
    return (<>
          <FirstName.Provider value={"Vrinda"}>
            <ComA />
          </FirstName.Provider>
    </>);
}

export default Practice;
export  {FirstName};
*/