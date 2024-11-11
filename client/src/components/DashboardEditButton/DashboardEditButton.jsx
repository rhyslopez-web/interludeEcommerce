import React from 'react'
import {Pencil} from 'lucide-react'

const DashboardEditButton = () => {
  return (
    <button className='h-10 w-10 bg-neutral-100 flex justify-center items-center rounded-full'>
        <Pencil strokeWidth={1} size={18} /> 
    </button>
)
}

export default DashboardEditButton