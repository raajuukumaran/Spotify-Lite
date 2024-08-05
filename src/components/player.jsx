import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
    const { track, audioRef, playStatus, play, pause, time, previous, next } = useContext(PlayerContext);

    const handlePlayPause = () => {
        if (playStatus) {
            pause();
        } else {
            play();
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-12" src={track.image} alt="Song Cover" />
                    <div className="text-left">
                        <p className="font-semibold">{track.name}</p>
                        <p className="text-gray-400 truncate">{track.desc}</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-1 mx-4 flex-grow">
                    <div className="flex gap-4 mb-2">
                        <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                        <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous" />
                        <img 
                            onClick={handlePlayPause} 
                            className="w-4 cursor-pointer" 
                            src={playStatus ? assets.pause_icon : assets.play_icon} 
                            alt={playStatus ? "Pause" : "Play"} 
                        />
                        <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
                        <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
                    </div>
                    <div className="flex items-center gap-5">
                        <p>{time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}</p>
                        <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative">
                            <div className="h-1 bg-green-800 rounded-full absolute top-0 left-0" style={{ width: `${(time.currentTime.minute * 60 + time.currentTime.second) / (time.totalTime.minute * 60 + time.totalTime.second) * 100}%` }}></div>
                        </div>
                        <p>{time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 opacity-75">
                    <img className="w-4" src={assets.plays_icon} alt="Playlists" />
                    <img className="w-4" src={assets.mic_icon} alt="Microphone" />
                    <img className="w-4" src={assets.queue_icon} alt="Queue" />
                    <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
                    <img className="w-4" src={assets.volume_icon} alt="Volume" />
                    <div className="w-20 bg-slate-50 h-1 rounded"></div>
                    <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" />
                    <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
                </div>
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default Player;
