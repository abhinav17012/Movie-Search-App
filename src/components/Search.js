import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/Context';


const Search = () => {
  
  const {query}=useContext(AppContext);
  const {Setquery}=useContext(AppContext);
  const {iserror}=useContext(AppContext);

  const handleChange=(e)=>{
    console.log(e.target.value);
  }
  return (
    <div>
        <div className="movie-search">
      <h1>Search your favourite movies</h1>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" name="movie" placeholder='Search your movies...' onChange={(e)=>{Setquery(e.target.value)}}/>
      </form>
      <p className='etext'>{iserror.show&&iserror.msg}</p>
      </div>
          </div>
  )
}

export default Search
