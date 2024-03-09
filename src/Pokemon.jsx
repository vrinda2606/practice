import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    
    const [num,setNum] = useState(1);
    const [name,setName] = useState("");
    const [moves,setMoves] = useState(0);


    useEffect(()=>{
        async function getTheData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getTheData();
    });


  return (
    <>
    <h1>{`Pokemon selected ${num}`}</h1>
    <h2>{`Pokemon name is ${name}`}</h2>
    <h3>{`Pokemon moves are ${moves}`}</h3>
      <select value={num} onChange={(e) => {
        setNum(e.target.value);
      }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </>
  )
}
export default Pokemon;