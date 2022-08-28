import React from 'react'
import Header from './utils/Header'

export default function Messages() {
  return (
    <div>
        <Header />

        <div className='container mx-auto sm:px-24 md:px-32 xl:px-32 lg:px-32 pt-2 pt-32'>

          <div className='grid grid-cols-4 gap-x-6'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg min-h-screen rounded-2hx">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div class="w-full rounded overflow-hidden shadow-lg min-h-screen col-span-3">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}
