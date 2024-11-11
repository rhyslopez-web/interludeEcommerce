import React from 'react'
import {Plus} from 'lucide-react'

const DashboardAddButton = () => {
  return (
    <button className='flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl'>
        <Plus/>
        Add product
    </button>
)
}

export default DashboardAddButton