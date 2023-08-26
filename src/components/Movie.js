import React, { useContext } from 'react'
import { AppContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

const Movie = () => {

  const {loading}=useContext(AppContext)
  const {movie}=useContext(AppContext)
 
  if(loading===true)
  {
    return(
      <div className="spinner-movie">
      <div className="loading-spinner">
      </div>
    </div>
    )
  }

  console.log(movie);
  return (
    <section className='movie-page'>
    <div className='container'>

      {
        movie.map((e,i)=>{
          const movieName=e.Title.substring(0,15);
          return(
            <div key={i}>
          <NavLink to={`movie/${e.imdbID}`}>
            <div className="card">
              <div className="card-info">
          <h2>{movieName.length >=15 ?`${movieName}...`:movieName}</h2>
          <img src={e.Poster} alt="" width={300}/>
          </div>
          </div>
          </NavLink>
          </div>
         
          )
        })
      }
    </div>
    </section>
  )
}

export default Movie
