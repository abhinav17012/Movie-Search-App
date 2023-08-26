import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Singlemovie = () => {

  const [loading,Setloading]=useState(true);
  const [movie,Setmovie]=useState("");
    
  const {id}=useParams();


    const {API_URL}=useContext(AppContext)

    const getMovies=async(url)=>{
      
      try{
      const res=await fetch(url);
      const data=await res.json();

      console.log(data);

      if (data.Response==="True") {
          Setloading(false);
          Setmovie(data);
      }
      else{
          Setloading(true);
      }
    }
    catch(error)
    {
      console.log(error);
    }
    }


       useEffect(()=>{
        setTimeout(()=>{
         getMovies(`${API_URL}&i=${id}`)
        },800)
    },[]) 

    
  if (loading===true) {
    return(
      <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
    )
  } 

  return (
    <div className='singlemovie'>
      <div className="box">
        <div className="image">
          <img src={movie.Poster} alt="" width={200} />
        </div>
        <div className="data">
          <h2>{movie.Title}</h2>
          <div>{movie.Released}</div>
          <div>{movie.Genre}</div>
          <div>{movie.imdbRating}/10</div>
          <div>{movie.Country}</div>
      <Link to="/"><button>Go Back</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Singlemovie
