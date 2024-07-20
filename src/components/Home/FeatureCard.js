import React from 'react'

const FeatureCard = ({title, description}) => {
  return (
    <div className='p-10 flex flex-col gap-6'>
        <div className='flex items-center gap-3.5'>
            <div className='h-16 w-16 bg-green-300 rounded-lg'></div>
            <p className='text-gray-900 font-semibold text-2xl'>{title}</p>
        </div>
        <p className='text-lg font-medium text-gray-800'>
{description}
        </p>
    </div>
  )
}

export default FeatureCard