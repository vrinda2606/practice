import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = () => {

  const [img,setImg] = useState("");
  const inputEvent = (e) => {
    const data = e.target.value;
    setImg(data);
  }

  return (<>
    <input 
    type='text' 
    placeholder='Search...'
    value={img} 
    onChange={inputEvent}/>
    {img === "" ? null : <SearchResult name={img} />}
  </>
  )
}

export default Search;