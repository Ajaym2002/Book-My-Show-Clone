import React, {createContext, useState } from 'react';

export const TvShowsContext = createContext();

const TvShowsProvider = ({children}) => {
    const [tvShows, setTvShows] = useState({
        id: 0,
        name: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
        vote_average: 0,
    })
  return <TvShowsContext.Provider value={{tvShows, setTvShows}}>{children}</TvShowsContext.Provider>;
}

export default TvShowsProvider;