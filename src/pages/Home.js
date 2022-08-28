import React from 'react'
import HomeData from './data/HomeData'
import Header from './utils/Header'
import FloatBtn from './utils/FloatBtn'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container mx-auto sm:px-24 md:px-32 xl:px-32 lg:px-32 pt-24">

            <HomeData />
            
            
        </div>
        <div className='fixed bottom-12 right-12'>
            <FloatBtn />
        </div>
    </div>
  )
}
