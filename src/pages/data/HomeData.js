import React, { Component } from 'react'
import data from './data.json'

import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'

class HomeData extends Component {
	render() {
		return (
            <div className='xl:columns-3 lg:columns-3 md:columns-2 sm:columns-2 xs:columns-2'>
                { data.dataPost.map((postsData, i) => {
						return (
                            <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 mb-8">
                                <div className='flex items-center p-4'>
                                    <img className='h-9  rounded-lg object-cover ' src={postsData.userImage} />
                                    <p className='w-full font-bold text-black text-sm'>{postsData.userName}</p>
                                </div>

                                <img className="w-full object-cover rounded-3xl " src={postsData.postImage} />
                                <div className='grid grid-cols-3 my-4'>
                                    <div className='col-span-2 '>
                                        <div className='flex gap-x-2 mx-4'>
                                            <FaRegHeart size={24} />
                                            <FaRegComment size={24} />
                                            <FiSend size={24} />
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='float-right mx-2'><BsBookmark size={24} /></div>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <div className='font-bold text-sm mb-2'>{postsData.likes} likes</div>
                                    <p className="text-gray-500 text-sm font-normal mb-2">
                                    {postsData.desc}
                                    </p>
                                    <p className='text-gray-500 text-xs font-thin'>{postsData.date} HOURS AGO</p>
                                </div>
                            </div>
						);
					})
				}
            </div>
        );
    }
} 
export default HomeData;