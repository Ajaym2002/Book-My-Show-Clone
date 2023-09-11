import React, { useEffect, useState } from "react";
// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout.jsx";
// Components
import PosterSlider from "../components/PosterSlider/PosterSlider.Component.jsx";
import HeroCarousel from "../components/HeroCarousal/HeroCarousel.Component.jsx";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component.jsx";

// Axios
import axios from "axios";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(()=>{
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0860166fc79df6f8fc14b09f50c19f8e');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, [])

    useEffect(() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0860166fc79df6f8fc14b09f50c19f8e');
            setPremierMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, [])

    useEffect(() => {
        const requestOnlineStreamMovies = async() => {
            const getOnlineStreamMovies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0860166fc79df6f8fc14b09f50c19f8e');
            setOnlineStreamEvents(getOnlineStreamMovies.data.results);
        };
        requestOnlineStreamMovies();
    }, [])
    
    return(
    <>
        <HeroCarousel/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider/>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider
             title="Recommended Movies"
             subtitle="List of recommended movies"
             posters={recommendedMovies}
             isDark={false}
             />
        </div>

        <div className="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                         alt="Rupay" className="w-full h-full"/>
                </div>
                <PosterSlider
                title="Premiers"
                subtitle="Brand new release every friday"
                posters={premierMovies}
                isDark={true}
                />
            </div>
        </div>
        <div>
            <PosterSlider
            title="Online Streaming Events"
            subtitle="Online streaming events"
            posters={onlineStreamEvents}
            isDark={false}
            />
        </div>
    </>
    )
}

export default DefaultLayoutHoc(HomePage);