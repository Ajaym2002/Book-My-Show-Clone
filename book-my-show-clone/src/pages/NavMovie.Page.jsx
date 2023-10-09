import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout.jsx";
import HeroCarousel from "../components/HeroCarousal/HeroCarousel.Component.jsx";
import { Disclosure } from '@headlessui/react';
import { HiChevronUp } from "react-icons/hi";
import axios from "axios";
import MoviePoster from '../components/Poster/MoviePoster.Component.jsx';

const NavMoviePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(()=>{
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0860166fc79df6f8fc14b09f50c19f8e');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, [])

  return (
    <>
        <HeroCarousel/>
        <div className='my-16 bg-gray-100'>
            <div className='container mx-auto'>
                <div className='w-full flex lg:flex-row-reverse gap-4'>
                    <div className='w-full lg:w-3/4 px-4 md:px-6'>
                        <h1 className='text-gray-700 text-2xl md:text-4xl lg:text-3xl mb-4 font-semibold'>
                            Movies In Palakkad
                        </h1>
                        {/* Need to built grid */}
                        <MoviePoster
                        posters={recommendedMovies}
                        />
                    </div>
                    <div className='hidden lg:block lg:w-1/4'>
                        <h1 className='text-gray-700 text-2xl md:text-4xl lg:text-3xl mb-4 font-semibold'>
                            Filters
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <div className='bg-white rounded px-2 py-1'>
                                {/* Using Disclosure- Headless ui */}

                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex items-center py-2 gap-3 text-sm">
                                        <HiChevronUp
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                            />
                                            <span className='text-red-600'>Date</span>

                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Today</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Tomorrow</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>This Weekend</span>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                    
                            </div>

                            <div className='bg-white rounded px-2 py-1'>
                                {/* Using Disclosure- Headless ui */}

                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex items-center py-2 gap-3 text-sm">
                                        <HiChevronUp
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                            />
                                            <span className='text-red-600'>Categories</span>

                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>E Sports</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Running</span>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                            </div>

                            <div className='bg-white rounded px-2 py-1'>
                                {/* Using Disclosure- Headless ui */}

                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex items-center py-2 gap-3 text-sm">
                                        <HiChevronUp
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                            />
                                            <span className='text-red-600'>Price</span>

                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Free</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>0-500</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>501-2000</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Above 2000</span>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>                                   
                            </div>

                            <div className='bg-white rounded px-2 py-1'>
                                {/* Using Disclosure- Headless ui */}

                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex items-center py-2 gap-3 text-sm">
                                        <HiChevronUp
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                            />
                                            <span className='text-red-600'>More Filters</span>

                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Kids Allowed</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Online Streaming</span>
                                                </div>
                                                <div className='border border-gray-200 px-2 py-0.5'>
                                                    <span className='text-red-600 text-sm'>Outdoor Events</span>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>                                 
                            </div>
                        </div>
                        <div className='border border-red-600 rounded mt-2 flex items-center justify-center text-red-600 text-sm p-1'>
                            Browse by Venues
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DefaultLayoutHoc(NavMoviePage);
