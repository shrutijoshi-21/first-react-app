import React, { useState } from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'
import LikeIcon from '../../icons/LikeIcon'

const BlogCard = ({topic, title, description, author, date, duration}) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <div className='p-10 flex flex-col gap-10'>
        <div>
        <img src="https://picsum.photos/200/300" alt="blog-card" className='w-full object-cover h-[428px] rounded-xl' />
        </div>
        <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col items-start gap-1'>
            <span className='text-gray-800 font-medium text-lg'>{topic}</span>
            <p className='text-gray-900 font-semibold text-[26px]'>{title}</p>
            </div>
            <p className='text-lg text-gray-700 font-medium'>
           {description}
            </p>
            <div className='flex items-center  gap-5'>
                <div className='flex items-center gap-4 w-full'>
                   <img src="https://picsum.photos/200/300" className='h-14 w-14 rounded-lg' />
                    <div className='flex-1'>
                    <p className='text-xl text-gray-900 font-semibold'>{author}</p>
                    <p className='text-gray-800 font-medium text-lg'>{date} - {duration}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2.5'>
                <button onClick={() => setIsLiked(!isLiked)} className={`p-4 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-900'}`}><LikeIcon /></button>
                <button className='p-4'><BookmarkIcon /></button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard