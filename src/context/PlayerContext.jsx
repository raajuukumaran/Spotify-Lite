import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(); // Export the context

const PlayerContextProvider = (props) => {
    const audioRef = useRef(null);
    const [trackIndex, setTrackIndex] = useState(0); // Use index to track the current song
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    // Play the current track
    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    };

    // Pause the current track
    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    };

    // Play the track by index
    const playWithId = (id) => {
        if (id >= 0 && id < songsData.length) {
            setTrackIndex(id);
            if (audioRef.current) {
                audioRef.current.src = songsData[id].src;
                audioRef.current.play();
                setPlayStatus(true);
            }
        }
    };

    // Play the previous track
    const previous = () => {
        setTrackIndex(prevIndex => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
            if (audioRef.current) {
                audioRef.current.src = songsData[newIndex].src;
                audioRef.current.play();
                setPlayStatus(true);
            }
            return newIndex;
        });
    };

    // Play the next track
    const next = () => {
        setTrackIndex(prevIndex => {
            const newIndex = prevIndex < songsData.length - 1 ? prevIndex + 1 : prevIndex;
            if (audioRef.current) {
                audioRef.current.src = songsData[newIndex].src;
                audioRef.current.play();
                setPlayStatus(true);
            }
            return newIndex;
        });
    };

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            // Initial duration update
            handleTimeUpdate();
            // Clean up listener on component unmount
            return () => {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [trackIndex]); // Update when trackIndex changes

    const contextValue = {
        audioRef,
        track: songsData[trackIndex], // Current track based on index
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
