import React from 'react'
import DashboardEditButton from '../DashboardEditButton/DashboardEditButton'
import { Link } from 'react-router-dom'

const ProductTableRow = ({id, name, description, price, variants, stock}) => {
  return (
    <li className='py-7 grid grid-cols-5 items-center'>
        <div className=''>
          <input type="checkbox" />
        </div>

        <span className='font-semibold col-span-2'>{name}</span>
        <span className='font-semibold'>${price}</span>

        <div className='flex justify-end'>
          <Link to={`/productDetails/` + id}>
            <DashboardEditButton/>
          </Link>
        </div>

    </li>
)
}

export default ProductTableRow