// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SongsItem = ({ name, image, desc, id }) => {
    const { playWithId, pause } = useContext(PlayerContext);

    const handleClick = () => {
        // Pause the current song before playing a new one
        pause();
        // Play the selected song
        playWithId(id);
    };

    return (
        <div onClick={handleClick} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex flex-col items-center'>
            <img className='w-full h-auto rounded' src={image} alt={name} />
            <p className='font-bold mt-2 mb-1 text-center text-white'>{name}</p>
            <p className='text-slate-200 text-sm text-center'>{desc}</p>
        </div>
    );
};

export default SongsItem;
