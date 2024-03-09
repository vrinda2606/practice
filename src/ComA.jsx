import React from 'react';
import {FirstName} from './Practice';

const ComA = () =>{
    return(
        <>
            <FirstName.Consumer>
                {value=><h1>{value}</h1>}
            </FirstName.Consumer>
        </>
    )
}

export default ComA;