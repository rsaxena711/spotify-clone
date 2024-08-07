import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from "../assets/assets"
import SongItem from './SongItem'
import AlbumItems from './AlbumItems'


const Displayhome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                  {albumsData.map((item,index)=>(<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
    </>
  )
}

export default Displayhome
