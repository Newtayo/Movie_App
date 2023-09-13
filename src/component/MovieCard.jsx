import React from 'react'
import '../style/moviecard.css'
import {MdFavorite } from "react-icons/md";


const MovieCard = ({card}) => {
  return (
    <div className='movie-card'>
      
        <img src={card.poster} alt={card.title} className='movie-poster'/>
        <button className='favorite'>< MdFavorite size={27}/></button>
        <h3>{card.title}</h3>
        <h4>{card.release_date}</h4>
    </div>
  )
}

export default MovieCard