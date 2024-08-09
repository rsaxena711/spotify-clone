import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

//context provider function
const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    
    //varibale
    const contextValue={ 
        //state
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;