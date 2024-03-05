import React, { useState } from "react";
const App = () => {

    const [cnt,setCnt] = useState(0);
    
    const prev = () => {
        setCnt(cnt-1);
    }

    const next = () => {
        setCnt(cnt+1);
    }

    return (<>
        <p>{cnt}</p>
        
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
    </>)    
}

export default App;