import React, { useEffect, useState } from "react";
const Practice = () => {

    const [num,setNum] = useState(0);

    useEffect( () => {
        document.title=`You clicked ${num} times` ;
    },[num]);

    return (<>
       <button onClick={() => {setNum(num+1);}}> hey {num} </button>
    </>);
}

export default Practice;

/*
useEffect
import React, { useEffect, useState } from "react";
const Practice = () => {

    const [num,setNum] = useState(0);

    useEffect( () => {
        document.title=`You clicked ${num} times` ;
    },[num]);

    return (<>
       <button onClick={() => {setNum(num+1);}}> hey {num} </button>
    </>);
}

export default Practice;
*/

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