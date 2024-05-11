import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
const App = () => {
  return (
    <div className='container'> 
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/blog/:id' Component={Blog} />
    </Routes>
    </div>
  )
}

export default App