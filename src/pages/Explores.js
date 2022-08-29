import React from 'react'
import Header from './utils/Header'
import ExploreData from './data/ExploreData'
import FloatBtn from './utils/FloatBtn'

export default function Explores() {
  return (
    <div>
        <Header />

        <div className='container mx-auto sm:px-24 md:px-32 xl:px-32 lg:px-32 pt-24'>
            <ExploreData />
        </div>
        
        <FloatBtn />
    </div>
  )
}
