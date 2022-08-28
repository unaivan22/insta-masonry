import React from 'react'
import { MdOutlineExplore } from 'react-icons/md'
import { MdAddCircleOutline } from 'react-icons/md'
import { MdNotificationsNone } from 'react-icons/md'
import {IoChatboxEllipsesOutline } from 'react-icons/io5'

export default function FloatBtn() {
  return (
    <div className='grid grid-cols-1 gap-y-4'>
        <a href='/explores' class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
            <MdOutlineExplore size={42} />
        </a>
        <a class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
            <MdAddCircleOutline size={42} />
        </a>
        <a href='/notifications' class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
            <MdNotificationsNone size={42} />
        </a>
        <a href='messages' class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
            <IoChatboxEllipsesOutline size={42} />
        </a>
    </div>
  )
}
