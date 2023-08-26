import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

const AppContext=createContext();
 
const AppProvider=({children})=>{

    const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
    
    const [loading,Setloading]=useState(true);
    const [movie,Setmovie]=useState([]);
    const [iserror,Setiserror]=useState({show:"false",msg:""});
    const [query,Setquery]=useState("titanic");

    const getMovies=async(url)=>{

        const res=await fetch(url);
        const data=await res.json();

        if (data.Response==="True") {
            Setloading(false);
            Setmovie(data.Search);
            Setiserror({
                show:"false",
                msg:"",
            });
        }
        else{
            Setloading(true);
            Setiserror({
                show:"true",
                msg:data.Error,
            });
        }
    }

    useEffect(()=>{
    let clear=    setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 800);
        return()=>clearTimeout(clear);
    },[query])

  /*  useEffect(()=>{
        setTimeout(()=>{
         getMovies(`${API_URL}&i=${query}`)
        },800)
    }) */

    return(
        <AppContext.Provider value={{loading,movie,iserror,query,Setquery,API_URL}}>{children}</AppContext.Provider>
    )
}

export {AppContext, AppProvider};
