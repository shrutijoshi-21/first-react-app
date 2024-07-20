import React from 'react'
import Banner from './Banner'
import MainSection from './MainSection'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-between sticky top-0 w-full bg-green-950'>
      <Banner />
      <MainSection />
    </div>
  )
}

export default Header