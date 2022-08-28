import React, { Component } from 'react'
import data from './explore.json'

import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'

class ExploreData extends Component {
	render() {
		return (
            <div className='xl:columns-4 lg:columns-3 md:columns-3 sm:columns-2 xs:columns-2'>
                { data.dataPost.map((postsData, i) => {
						return (
                            <div className="max-w-sm rounded-2xl mb-8">
                                <img className="w-full object-cover rounded-3xl " src={postsData.postImage} />
                            </div>
						);
					})
				}
            </div>
        );
    }
} 
export default ExploreData;