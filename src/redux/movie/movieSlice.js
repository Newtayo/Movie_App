import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const credentials = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODMwOGRiNjA2MzY5MWUwODllMWM2YzI5MzNlZTUwNyIsInN1YiI6IjYzM2RkZGU1NGI2ZDlkMDA3OWNkMzQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKvtRqwcB8c3jO3hW1HGc_POQslmz-xDqF2FLIveD9U'
    }
  };
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

const initialState = {
    movieList : [],
    isLoading: false,
    error: false,
    success: false,
}

export const fetchMovie = createAsyncThunk('movieList/get', async() => {
    try {
        const response = await axios.get(url, credentials);
        return response.data;
      } catch (error) {
        return error;
      }
    });

    const movieSlice = createSlice({
        name: 'movie',
        initialState,
        reducers :{},
        extraReducers: (builder) =>{
            builder
            .addCase(fetchMovie.pending, (state) => ({
                ...state,
                isLoading: true,
            }))
            .addCase(fetchMovie.fulfilled, (state, action) => {
                const eachMovie = action.payload;
                const movieLibrary =  eachMovie.results
                const movies = [];
                movieLibrary.map((movie)=> movies.push ({
                    id: movie.id,
                    poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    title: movie.title,
                    release_date: movie.release_date,
                    overview: movie.overview,
                    average_vote: movie.vote_average,

                }) );
                return {
                    ...state,
                    movieList : movies.slice(0,10),
                    isLoading: false,
                    success: true,
                }
            })
            .addCase(fetchMovie.rejected, (state) => ({
                ...state,
                isLoading: false,
                error: true,
              }));
        }
    })

    export default movieSlice.reducer;