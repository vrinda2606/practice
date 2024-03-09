import React , {createContext} from "react";

const FirstName = createContext();

const Practice = () => {
    return (<>
          <FirstName.Provider value={"Vrinda"}>
            
          </FirstName.Provider>
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