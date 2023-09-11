import React from "react";
import MovieNavBar from '../components/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = (Component) =>
    ({...props}) => {
        return(
            <div>
                <MovieNavBar/>
                <Component {...props}/>
            </div>
            
     )
    }

export default MovieLayoutHoc;