import React from 'react'
import Carousel from './components/Carousel'

const HomeLayout: React.FC = () => {
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

export default HomeLayout;