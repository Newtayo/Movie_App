import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import Header from './Header';
import '../style/home.css' 
import Footer from './Footer';


const Home = () => {
    const { movieList, isLoading, error } = useSelector((state) => state.movie)
    console.log(movieList)
    console.log(error)
    const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    if (isLoading){
        return <div>Loading..</div>
    }
    else if (error !== null) {
        return <div>Error: </div>;
        } 
  else{
  return (
    <div className='home-container'>  
             <Header  image={movieList[randomNumber]}/>
        
         <div className='movie-container'>
     
        {movieList.slice(0,10).map((iteration)=> (
            <MovieCard card={iteration} key={iteration.id}/>
        )
         )}
    </div>
    <Footer />
    </div>
 
  )
}}

export default Home