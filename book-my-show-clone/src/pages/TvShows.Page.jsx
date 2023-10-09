import React, { useState, useEffect } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import HeroCarouselTvShows from "../components/HeroCarousal/HeroCarousel.TvShows.Component";
import PosterSliderTvShows from "../components/PosterSlider/PosterSlider.TvShows.Component.jsx";

import axios from "axios";

const TvShowsPage = () => {

  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);


  useEffect(()=>{
    const requestOnTheAirTvShows = async() => {
        const getOnTheAirTvShows = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=0860166fc79df6f8fc14b09f50c19f8e');
        setOnTheAir(getOnTheAirTvShows.data.results);
    };
    requestOnTheAirTvShows();
  }, [])


  useEffect(()=>{
    const requestPopularTvShows = async() => {
        const getPopularTvShows = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0860166fc79df6f8fc14b09f50c19f8e');
        setPopular(getPopularTvShows.data.results);
    };
    requestPopularTvShows();
  }, [])


  useEffect(()=>{
    const requestTopRatedTvShows = async() => {
        const getTopRatedTvShows = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=0860166fc79df6f8fc14b09f50c19f8e');
        setTopRated(getTopRatedTvShows.data.results);
    };
    requestTopRatedTvShows();
  }, [])

  return (
    <>
      <HeroCarouselTvShows/>
      <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSliderTvShows
             name="Tv Shows On Air"
             subtitle="Just Aired Tv Shows"
             posters={onTheAir}
             vote_average={onTheAir}
             isDark={false}
             />
        </div>
        <div className="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/exclusives-banner-web-collection-202208191200.png"
                         alt="Exclusives" className="w-full h-full"/>
                </div>
                <PosterSliderTvShows
                name="Exclusives"
                subtitle="All Popular Tv Shows"
                posters={popular}
                vote_average={popular}
                isDark={true}
                />
            </div>
        </div>
        <div>
            <PosterSliderTvShows
            name="Top Rated Tv Shows"
            subtitle="Most Rated Tv Shows"
            posters={topRated}
            vote_average={topRated}
            isDark={false}
            />
        </div>

    </>
  )
};
export default DefaultLayoutHoc(TvShowsPage);
