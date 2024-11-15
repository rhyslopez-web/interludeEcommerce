import React, { useState } from 'react'

const AdminAddProduct = () => {

    const [newProduct, setNewProduct] = useState(
        {
            image: 'N/A',
            title: '',
            description: '',
            price: 0,
            inStock: true,
            displayProduct: false
        }
    )

    const handleTitleChange = (e) => {
        setNewProduct({
            ...newProduct,
            title: e.target.value
        })
        console.log("This is your product title: " + newProduct.title)
    }

    const submitNewProduct = () => {
        
    }
    
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5'>
        <div className=''>
            <h1 className='text-2xl font-bold'>Add Your Product</h1>
        </div>

        <div className='flex flex-col gap-5'>
            {/* Product title input */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='productTitle'>Title</label>
                <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" onChange={handleTitleChange} />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='productTitle'>Price</label>
                <input type='number' placeholder="Product price" className="input input-bordered w-full max-w-xs" />
            </div>

            {/* Product description input */}
            <div className='flex flex-col gap-2'>
                <label htmlFor="productDescription">Description</label>
                <textarea className="textarea textarea-bordered" placeholder="Add your description"></textarea>
            </div>

            {/* Product Image */}
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Image</label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">In Stock</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Display Product</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                </label>
            </div>

            <div className='mt-10'>
                <button className="w-full btn btn-primary">Add Product</button>
            </div>
        </div>
    </div>
  )
}

export default AdminAddProduct