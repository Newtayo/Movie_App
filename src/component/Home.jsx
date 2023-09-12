import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import '../style/home.css'


const Home = () => {
    const { movieList } = useSelector((state) => state.movie)
    console.log(movieList)
  return (
    <div className='movie-container'>
        {movieList.map((iteration)=> (
            <MovieCard card={iteration}/>
        )
         )}
    </div>
  )
}

export default Home