import React, { useState, useEffect, useContext } from "react";

import MovieLayoutHoc from "../layout/Movie.layout";

import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.Context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";


const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0860166fc79df6f8fc14b09f50c19f8e`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0860166fc79df6f8fc14b09f50c19f8e`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0860166fc79df6f8fc14b09f50c19f8e`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0860166fc79df6f8fc14b09f50c19f8e`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {
    dots: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero/>
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offer
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">
                  Visa stream offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Cast & Crew */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast & Crew
          </h2>
          <Slider {...settingsCast}>
            {
              cast.map((castData) => {
                <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/>
              })
            }
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Movies */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="RecommendedMovies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Movies */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE"
            posters={similarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};
export default MovieLayoutHoc(MoviePage);
