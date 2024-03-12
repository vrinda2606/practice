import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';              //npm i bootstrap@5.3.3
                                                                            //https://getbootstrap.com/docs/5.3/getting-started/introduction/


const Practice = () => {
    return (
    <>
    <div className="container">
       <h1 className="text-center">Welcome</h1>
       <br />
       <button className="btn btn-outline-primary">Hello</button>
    </div>
    </>
    );
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