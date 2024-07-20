import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
       {title ?  <h2 className='text-gray-900 font-bold text-5xl leading-[72px]'>{title}</h2> : ''}
       {description ? <p className='text-gray-800 font-medium'>{description}</p> : ''}
    </div>
  )
}

export default SectionTitle