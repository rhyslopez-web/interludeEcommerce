import { useEffect, useState } from "react"
import ProductTable from "./components/ProductTable/ProductTable"
import ProductTableRow from "./components/ProductTableRow/ProductTableRow"
import { useQuery } from "@tanstack/react-query"
 
function App() {

  const {data, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4600/displayAvailableProducts')
      if (!response.ok) throw new Error('Error fetching data')
      return response.json()
    }
  })

  if (isLoading) return <p>Loading..</p>
  if (error) return <p>Error{error.message}</p>

  return (
    <div className="lg:p-10 md:p-5 p-5">
      <ProductTable>
        {data.productData.map((product, index) => (
          <ProductTableRow id={product.id} key={index} price={product.price} name={product.title} />
        ))}
      </ProductTable>
    </div>
    
  )
}

export default App
