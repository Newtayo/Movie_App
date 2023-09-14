import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import '../style/home.css';
import Footer from './Footer';
import { VscSearch } from 'react-icons/vsc';
import '../style/header.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { movieList, isLoading, error } = useSelector((state) => state.movie);
  const [search, setSearch] = useState('');
  const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

  if (isLoading) {
    return <div>Loading..</div>;
  } else if (error !== null) {
    return <div>Error: {error.message}</div>;
  } else {
    const filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className='home-container'>
        <Header image={movieList[randomNumber]} />
        <form className='search-form' onSubmit={(e) =>{e.preventDefault()}}>
          <input
            className='search'
            placeholder='What do you want to watch ?'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className='searchbtn'>
            <VscSearch />
          </button>
        </form>
        <div className='movie-container'>
          {
          filteredMovies.slice(0,10).map((iteration) => (
            <MovieCard card={iteration} key={iteration.id} data-testid= 'movie-card' />

          ))}
     
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
