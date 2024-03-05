import React, { useState } from "react";
const Form = () => {

    const [val , setVal] = useState({
        fname : '',
        lname : '',
        email : '',
        phno : ''
    });
    const inputEvent = (e) => {
        console.log((e.target.value));

        const {name,value} = e.target;

        setVal((preValue) => {
            return {
                ...preValue,
                [name] : value,
            };
        });

    }

    const func = (event) => {
        event.preventDefault();
        window.alert("Form Submitted Successfully!");
    }

    return (
        <>
            <div>
                <form onSubmit={func}>
                <h1>Hello {val.fname} {val.lname}</h1>
                <p>{val.email}</p>
                <p>{val.phno}</p>
                <input 
                    type="text" 
                    onChange={inputEvent}  
                    placeholder="Fname"
                    value={val.fname}
                    name = "fname"
                    />
                <input 
                    type="text"
                    onChange={inputEvent}
                    placeholder="Lname"
                    value={val.lname}
                    name = "lname"
                />
                <input 
                    type="email"
                    onChange={inputEvent}
                    placeholder="email"
                    value={val.email}
                    name = "email"
                />
                <input 
                    type="number"
                    onChange={inputEvent}
                    placeholder="Ph No"
                    value={val.phno}
                    name = "phno"
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;