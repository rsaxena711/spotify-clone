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
    const contextValue={ 
        //state
        audioRef,
        seekBar,seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;