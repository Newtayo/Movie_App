import { useEffect, useState } from 'react'
import './App.css'
import Home from './component/Home'
import MovieDetail from './component/MovieDetails'
import { useDispatch } from 'react-redux'
import { fetchMovie } from './redux/movie/movieSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchMovie())
  }, [dispatch])

  return (
    <Router>
    <div className='container'>
    <Routes>
          <Route path="/" element={ <Home/>} exact />
          <Route path="/movies/:id" element={<MovieDetail />} exact />

        </Routes>
     
      </div>
      </Router>
  )
}

export default App
