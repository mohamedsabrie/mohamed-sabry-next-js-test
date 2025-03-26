import { ProductType } from '@/lib/types'
import React from 'react'
import AddToCart from './AddToCart'

function ProductDetails({productData} : {productData : ProductType}) {
    const {title, price, description} = productData
  return (
    <div>
        <h3 className='text-sm text-mid-gray'>Fasco</h3>
        <span className='text-sm capitalize text-gray-500 mt-2 block'>{productData.category}</span>
        <p className='text-[30px]'>{title}</p>
        <p className="text-2xl pt-5">${price}</p>
        <p className='font-jost leading-6 pt-4 pb-8'>{description}</p>
        <AddToCart product={productData} />
    </div>
  )
}

export default ProductDetails