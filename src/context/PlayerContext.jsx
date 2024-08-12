import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

//context provider function
const PlayerContextProvider = ({children}) => {
    //varibale
    const audioRef = useRef();
    const seekBg=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(songsData[0]);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            sec:0,
            min:0
        },
        totalTime:{
            sec:0,
            min:0
        }
    })
    //functions
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        if (track.id > 0) {
            console.log("prev", track.id);
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const next = async () => {
        if (track.id < songsData.length - 1) {
            console.log("next", track.id);
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = (e) => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime * 100 / audioRef.current.duration)) + "%";
                setTime({
                    currentTime: {
                        sec: Math.floor(audioRef.current.currentTime % 60),
                        min: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        sec: Math.floor(audioRef.current.duration % 60),
                        min: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef])

    const contextValue={ 
        //state
        audioRef,
        seekBar,seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,
        next,
        seekSong
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;