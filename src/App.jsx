/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Sidebar from './components/sidebar';
import Player from './components/player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

const app = () => {

const {audioRef,track} = useContext(PlayerContext);


  return (
    <div className='h-screen bg-black'>
      <div className='h- [90%] flex'>
        <Sidebar />
        <Display />

      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>

    </div>
  )
}
export default app