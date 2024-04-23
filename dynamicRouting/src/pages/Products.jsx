import React, { useContext } from 'react'
import { dataContext } from '../context/dataContext'
import {Link} from 'react-router-dom'

const Products = () => {
    const{products,loading,error} = useContext(dataContext);
  return (
    <div>
         {loading ? 'Fetching Data' :  error ? <p>Something wrong</p> : products.map((product) => <div key={product.id}>
                                        <h3>{product.title}</h3>
                                        <Link to={`/productDetails/${product.id}`}>Click to view product details</Link>
                                    </div>)}
    </div>
  )
}

export default Products