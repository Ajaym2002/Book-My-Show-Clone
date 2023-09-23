import React from "react";

import Slider from "react-slick";

import PosterTvShows from "../Poster/Poster.TvShows.Component";

const PosterSliderTvShows = (props) => {
  const { name, subtitle, posters, vote_average, isDark, config } = props;

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
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {name}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-black"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => (
          <PosterTvShows {...each} isDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSliderTvShows;