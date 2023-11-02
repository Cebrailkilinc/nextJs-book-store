import React from 'react'
import Carousel from './components/Carousel'
import Card from './components/Card';
import { Book } from './types/types';
const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto pt-20" >
      <div>
        <Carousel />
      </div>
      <div className='grid grid-cols-4 '>
        {/* {
          products.map(() => {
            return (
              <Card />
            )
          })
        } */}

      </div>
    </div>
  )
}

export default HomePage