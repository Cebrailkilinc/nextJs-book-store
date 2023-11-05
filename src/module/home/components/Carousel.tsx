import React from 'react';
import { Carousel } from 'antd';
import bookStore from "@/module/home/asset/bookstore.jpg";
import Image from 'next/image';
const CarouselLayout = () => {
  const contentStyle: React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    zIndex: "10"
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image
            src={bookStore}
            alt="Picture of the author"
            style={{
              width: '100%',
              height: '600px',
            }}
          />
        </div>

      </Carousel>
    </div>

  )
}

export default CarouselLayout 