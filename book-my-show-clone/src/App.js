// import logo from './logo.svg';

import './App.css';
import {Routes, Route} from 'react-router-dom';

// React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from './pages/Home.Page';
import NavMoviePage from './pages/NavMovie.Page';
import MoviePage from './pages/Movie.Page';
import TvShowsPage from './pages/TvShows.Page';
import TvShowsByIdPage from './pages/TvShowsById.Page';
import NoPage from './pages/NoPage';

// Axios
import axios from "axios";


// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/movie' element={<NavMoviePage/>}/>
    <Route path="/movie/:id" element={<MoviePage/>}/>
    <Route path="/tv" element={<TvShowsPage/>}/>
    <Route path="/tv/:id" element={<TvShowsByIdPage/>}/>
    <Route path='*' element={<NoPage/>}/>
  </Routes>;
}

export default App;
