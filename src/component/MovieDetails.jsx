import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { movieDetail } from '../redux/movie/movieSlice';
import '../style/moviedetail.css'
import Sidebar from './Sidebar';


const MovieDetail = () => {

    const { id } = useParams();
    const { details, isLoading, error } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieDetail(id))
    }, [dispatch])
    const releaseDate = details.release_date ? new Date(details.release_date) : null;
    if (isLoading) {
        return <div>Loading..</div>;
      } else if (error !== null) {
        return <div>Error: {error.message}</div>;
      }
      else
  return (
    <div className='movie-details'>
        <Sidebar />
        <img src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} className='movie-backdrop' />
        <table className='movie-banner'>
  <thead>
    <tr>
      <th className='title'>Title</th>
      <th className='date'>Released Date</th>
      <th className='runtime'>Runtime</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='title' data-testid= 'movie-title'>{details.title}</td>
      <td className='date' data-testid= 'movie-release-date'>
        {releaseDate ? releaseDate.toUTCString().substring(0, 17) : 'Release Date Not Available'}
      </td>
      <td className='runtime' data-testid= 'movie-runtime'>{details.runtime}m</td>
    </tr>
  </tbody>
</table>
        <p className='movie-overview' data-testid= 'movie-overview'>{details.overview}</p>
        </div>
  )
}

export default MovieDetail