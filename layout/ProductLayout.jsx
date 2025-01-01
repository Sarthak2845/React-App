import React from 'react'
import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <div>
        <h1>List of Products</h1>
        <Outlet/>
        </div>
  )
}

export default ProductLayout