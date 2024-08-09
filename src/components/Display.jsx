import React, { useEffect, useRef } from 'react'
import {
    Routes, Route,
    useLocation,
  } from 'react-router-dom';
import Displayhome from './Displayhome'
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef= useRef();
  //to know which route are we on
  const location = useLocation();
  console.log(location); //object
  console.log(location.pathname.slice(-1)); //album id
  let isAlbum = location.pathname.includes("album");
  let albumId = isAlbum ? location.pathname.slice(-1) : ""
  let bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    }
    else {
      displayRef.current.style.background = "#121212";
    }
  })
  

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<Displayhome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
        </Routes>
    </div>
  )
}

export default Display
