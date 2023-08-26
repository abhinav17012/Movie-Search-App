import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import React from 'react'
import { createContext } from 'react';
import Singlemovie from './components/Singlemovie';

const AppContext=createContext();

function App() {
  const AppProvider=({Children})=>{
    return (
    <AppContext.Provider>{Children}
      </AppContext.Provider>
    )
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/movie/:id" element={< Singlemovie/>} />
        <Route path="/error" element={< Error/>} />
              </Routes>
          </div>

  );
}

export default App;
