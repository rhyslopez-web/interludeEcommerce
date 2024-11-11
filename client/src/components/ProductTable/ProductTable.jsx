import React from 'react'
import DashboardAddButton from '../DashboardAddButton/DashboardAddButton'

const ProductTable = ({children}) => {
  return (
    <div className='bg-white rounded-2xl lg:p-10 md:p-5 p-0 flex flex-col gap-10 text-sm lg:text-md'>

        <div className='flex flex-col lg:flex-row justify-between gap-5'>
            <h2 className='font-bold text-2xl'>Your Products</h2>
            <div>
                <DashboardAddButton/>
            </div>
        </div>

        <div>
            <table className='w-full'>
                <tr className='w-full grid grid-cols-5 font-bold'>
                    <th className='text-start'>Select</th>
                    <th className='col-span-2 text-start'>Name</th>
                    <th className='text-start'>Price</th>
                    <th className='text-end'>Edit</th>
                </tr>

            </table>

            <ul>
                {children}
            </ul>
        </div>
    </div>
  )
}

export default ProductTable