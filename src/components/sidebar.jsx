/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities, no-unused-vars
import React from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import { assets } from '../assets/assets';

const Sidebar = () => {
    const location = useLocation(); // Get current location

    // Conditionally render the sidebar only on the home page
    if (location.pathname !== '/') {
        return null;
    }

    return (
        <div className='w-[300px] h-full bg-[#121212] text-white p-4 flex flex-col'>
            <div className='flex flex-col gap-4 mb-4'>
                {/* Home and Search Section */}
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={assets.home_icon} alt="Home Icon" className='w-6' />
                    <p className="font-bold text-lg">Home</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={assets.search_icon} alt="Search Icon" className='w-6' />
                    <p className="font-bold text-lg">Search</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 flex-grow'>
                {/* Your Library Section */}
                <div className="flex items-center gap-3 p-4 border-t border-gray-600">
                    <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
                    <p className="font-semibold text-lg">Your Library</p>
                    <div className="flex items-center gap-3 ml-auto">
                        <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
                    </div>
                </div>

                {/* Create Playlist Section */}
                <div className="p-4 bg-[#1d1d1d] rounded-lg flex flex-col gap-3">
                    <h1 className="text-lg font-semibold">Create Your First Playlist</h1>
                    <p className="text-sm font-light whitespace-nowrap">It's easy, we will help you</p>
                    <button className="px-4 py-2 bg-white text-black rounded-full">Create Playlist</button>
                </div>

                {/* Browse Podcasts Section */}
                <div className="p-4 bg-[#1d1d1d] rounded-lg flex flex-col gap-3">
                    <h1 className="text-lg font-semibold">Let's find some podcasts to follow</h1>
                    <p className="text-sm font-light whitespace-nowrap">We'll keep you updated on new episodes</p>
                    <button className="px-4 py-2 bg-white text-black rounded-full">Browse Podcasts</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
