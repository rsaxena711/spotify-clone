import React from 'react'
import { assets } from '../assets/assets';
import { songsData } from '../assets/assets';

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden items-center gap-4 lg:flex'>
                <img className='w-12' src={songsData[0].image} alt="" />
                <div>
                    <p>
                        {/* {track.name} */}{songsData[0].name}
                        </p>
                    <p>
                        {/* {track.desc.slice(0, 12)} */}{songsData[0].desc.slice(10)}
                        </p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img className='w-4 cursor-pointer'  src={assets.prev_icon} alt="" />
                    {true
                        ? <img className='w-4 cursor-pointer'  src={assets.pause_icon} alt="" />
                        : <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-5'>
                    <p>00:00</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>00:00</p>
                </div>
            </div>
            <div className='hidden items-center gap-2 opacity-75 lg:flex'>
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50'>
                    <hr className='h-1 bg-slate-50 rounded' />
                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
  )
}

export default Player
