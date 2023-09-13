import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.svg'
import { VscSearch } from "react-icons/vsc"

import '../style/header.css'

const Header = () => {
  const { movieList, isLoading, error } = useSelector((state) => state.movie);
  const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

    if (isLoading) {
    return <div>Loading....</div>;
    } 
    else if (error) {
    return <div>Error:</div>;
    } 
    else if (!movieList || movieList.length === 0) {
    return <div></div>;
     }
    else {
    return (
      <header style={{
       backgroundImage :`url(${movieList[randomNumber].backdrop_path})`,
       backgroundSize:  '100% 100%',
       backgroundRepeat: 'no-repeat', /* Prevent image repetition */
       backgroundPosition: 'center center',
      }}>
        <div className='search-container'>
            <img src={logo} alt='logo' className='logo'></img>
            <form className='search-form'>
                <input className='search' placeholder='What do you want to watch ?'></input>
                <button className='searchbtn'><VscSearch /></button>

            </form>
        </div>
        <article className='article-container'>
        <h2 className='header-title'>{movieList[randomNumber].title} </h2>
        <p>`${movieList[randomNumber].overview.substring(0, 200)}...`</p>
        <button className='trailer'>Watch Trailer</button>
        </article>
      </header>
    );
  }
};

export default Header;
