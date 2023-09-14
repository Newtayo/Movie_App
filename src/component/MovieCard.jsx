import React, { useState } from 'react'
import '../style/moviecard.css'
import {MdFavorite } from "react-icons/md";
import { Favorite } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const MovieCard = ({card}) => {
    const [isToggled, setIsToggled] =useState(false)
    const handleClick =()=>{
        setIsToggled(!isToggled);
    }
  return (
    <div className='movie-card'>
      
        <img src={card.poster} alt={card.title} className='movie-poster' data-testid= 'movie-poster'/>
        <button className={isToggled? 'pressed' : 'favorite'} onClick={handleClick}>< MdFavorite size={27}/></button>
        <NavLink to ={`/movies/${card.id}`}  className='movie-link'>
        <h3 data-testid= 'movie-title'>{card.title}</h3>
        <h4 data-testid= 'movie-release-date'>{card.release_date}</h4>
        </NavLink>
    </div>
  )
}

export default MovieCard