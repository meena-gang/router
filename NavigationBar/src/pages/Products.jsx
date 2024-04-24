import React, { useEffect, useState } from 'react'

const Products = () => {
    const[products, setProducts] = useState([]);
   useEffect(() =>  {
    fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(json=>setProducts(json))
},[])
  return (
    <>
     {products.map((product) => <div key={product.id}>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
     </div>)}
    </>
  )
}

export default Products