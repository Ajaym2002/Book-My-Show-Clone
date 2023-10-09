import React from 'react';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
function NavSm(){
    return <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">Palakkad <BiChevronDown/></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
    </>;
}


function NavMd(){
    return <>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-3 rounded-md">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none"/>
        </div>
    </>
}


function NavLg(){
    return <>
        <div className="container flex mx-auto px-4 pb-3 items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-10 h-10">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch/>
                    <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports and activities"/>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">Palakkad <BiChevronDown/></span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
        <div className='bg-darkBackground-800 p-1 pt-2'>
            <div className='container mx-auto px-4 flex items-center justify-between'>
                <div className='flex gap-5'>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        <Link to={'/movie'}>Movies</Link>
                    </div>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        <Link to={'/tv'}>Tv Shows</Link>
                    </div>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        Events
                    </div>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        Sports
                    </div>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        Activities
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        Offers
                    </div>
                    <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white">
                        Gift Cards
                    </div>
                </div>
            </div>
        </div>
    </>
}

const Navbar = () => {
    return (
        <>
            <nav className="bg-darkBackground-700 px-3 py-4">
                <div className="md:hidden">
                    <NavSm/>
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavMd/>
                </div>

            </nav>
            <nav className='bg-darkBackground-700'>
                <div className="hidden md:hidden lg:block">
                    <NavLg/>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
