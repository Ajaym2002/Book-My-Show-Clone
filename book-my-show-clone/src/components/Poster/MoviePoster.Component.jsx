import React from 'react';

import {Link} from 'react-router-dom';
const MoviePoster = (props)=> {
    const { posters } = props;
    return(
        <>
        <div className="grid grid-cols-4 gap-4 grid_small">
        {posters.map((each) => (
            <Link to={`/movie/${each.id}`}>
                <div className='flex flex-col items-start'>
                    <div className='md:h-full lg:h-64 h-56 w-full md:w-90 lg:w-full'>
                        <img src={`https://image.tmdb.org/t/p/original${each.poster_path}`} alt='poster' className='w-full h-full rounded-xl'/>
                    </div>
                    <h3 className='text-md md:text-xl font-semibold text-black'>{each.title}</h3>
                    <p className="text-sm md:text-lg font-normal text-gray-600">{each.original_language}</p>
                </div>
            </Link>
        ))}
        </div>
        </>
    )
}

export default MoviePoster;
