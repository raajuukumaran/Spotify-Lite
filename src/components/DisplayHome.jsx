/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets'; // Combined import
import AlbumItem from './AlbumItem';
import SongsItem from './SongsItem';
 // Correct capitalization

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='text-white my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className=' text-white flex overflow-auto'>
                    {albumsData.map((item, index) => (
                        <AlbumItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='text-white my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (
                        <SongsItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            
            
        </>
    );
};

export default DisplayHome;
