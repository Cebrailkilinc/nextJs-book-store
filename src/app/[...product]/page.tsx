import ProductDetail from '@/module/productDetail'
import React from 'react'

const page = ({ params }: { params: { product: string } }) => {
  return (
    <>
      <ProductDetail />
    </>
  )
}

export default page