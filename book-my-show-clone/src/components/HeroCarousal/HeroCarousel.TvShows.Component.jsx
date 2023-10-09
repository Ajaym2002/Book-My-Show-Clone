import React, { useState } from "react";
import HeroSlider from "react-slick";
// Arrows
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarouselTvShows = () => {
  const [images, setImages] = useState([
    {
        "backdrop_path": "/9In9QgVJx7PlFOAgVHCKKSbo605.jpg",
        "first_air_date": "2013-12-02",
        "genre_ids": [
        16,
        35,
        10765,
        10759
        ],
        "id": 60625,
        "name": "Rick and Morty",
        "origin_country": [
        "US"
        ],
        "original_language": "en",
        "original_name": "Rick and Morty",
        "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
        "popularity": 1386.559,
        "poster_path": "/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
        "vote_average": 8.7,
        "vote_count": 8572
        },
        {
        "backdrop_path": "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
        "first_air_date": "2017-03-19",
        "genre_ids": [
        18,
        10751
        ],
        "id": 70785,
        "name": "Anne with an E",
        "origin_country": [
        "CA"
        ],
        "original_language": "en",
        "original_name": "Anne with an E",
        "overview": "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
        "popularity": 178.769,
        "poster_path": "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
        "vote_average": 8.7,
        "vote_count": 4377
        },
        {
        "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
        "first_air_date": "2005-02-21",
        "genre_ids": [
        16,
        10759,
        10765
        ],
        "id": 246,
        "name": "Avatar: The Last Airbender",
        "origin_country": [
        "US"
        ],
        "original_language": "en",
        "original_name": "Avatar: The Last Airbender",
        "overview": "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
        "popularity": 107.687,
        "poster_path": "/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg",
        "vote_average": 8.7,
        "vote_count": 3477
        },
        {
        "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
        "first_air_date": "2019-04-06",
        "genre_ids": [
        16,
        10759,
        10765
        ],
        "id": 85937,
        "name": "Demon Slayer: Kimetsu no Yaiba",
        "origin_country": [
        "JP"
        ],
        "original_language": "ja",
        "original_name": "鬼滅の刃",
        "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
        "popularity": 216.295,
        "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
        "vote_average": 8.7,
        "vote_count": 5593
        },
        {
        "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
        "first_air_date": "2023-01-15",
        "genre_ids": [
        18
        ],
        "id": 100088,
        "name": "The Last of Us",
        "origin_country": [
        "US"
        ],
        "original_language": "en",
        "original_name": "The Last of Us",
        "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
        "popularity": 498.093,
        "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        "vote_average": 8.7,
        "vote_count": 4027
        }
  ]);

  // config info

  const settingsLG = {
    arrows: true,
    dots: true,
    slidesToShow: 2,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {
          images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {
          images.map((images) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarouselTvShows;
