import { useEffect, useState } from "react"
import ProductTable from "./components/ProductTable/ProductTable"
import ProductTableRow from "./components/ProductTableRow/ProductTableRow"
 
function App() {

  const [products, setProducts] = useState()
  const BASE_URL = "http://localhost:4600"

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(BASE_URL + '/displayAvailableProducts')
      const products = await res.json()
      setProducts(products.productData)
    }

    fetchProducts()
  }, [])

  console.log(products)

  return (
    <div className="lg:p-10 md:p-5 p-5">
      <ProductTable>
        {
        products
        ?
        products.map((product, index) => (
          <ProductTableRow key={index} id={product.id} name={product.title} price={product.price} />
        ))
        :
        <span>Loading Data</span>
      }
      </ProductTable>
    </div>
    
  )
}

export default App
