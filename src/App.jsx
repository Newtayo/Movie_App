import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import { useDispatch } from 'react-redux'
import { fetchMovie } from './redux/movie/movieSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchMovie())
  }, [dispatch])

  return (
    <div className='container'>
      <Home/>
    </div>
  )
}

export default App
