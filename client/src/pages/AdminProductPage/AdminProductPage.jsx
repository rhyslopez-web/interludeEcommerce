import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AdminProductPage = () => {


  const params = useParams()
  const BASE_URL = "http://localhost:4600"
  
  const {data, error, isLoading} = useQuery({
    queryKey: ['productDetails', params.id],
    queryFn: async () => {
      const res = await fetch(BASE_URL + '/products/' + `${params.id}`)
      if (!res.ok) throw new Error('Could not fetch data')
      return res.json()
    }, 
    enabled: !!params.id
  })

  if (isLoading) return <p>Loading data</p>
  if (error) return <p>Error: {error.message}</p>

  
  return (
    <div>
      <div className='flex flex-col'>
        <label className='text-xl font-semibold' for='productTitle'>Product Title</label>
        
        <input
        className='p-2 rounded-xl border' 
        type="text" 
        name='productTitle' 
        value={data.title} 
        />
      </div>
    </div>
  )
}

export default AdminProductPage