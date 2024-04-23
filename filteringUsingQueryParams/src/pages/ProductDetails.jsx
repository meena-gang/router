import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';

const ProductDetails = () => {

    const[product, setProduct] = useState({});
    const {id} = useParams();
   
    
    useEffect(() =>  {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
       .then(res=>res.json())
       .then(json=>setProduct(json.data))
    },[]);
   
    console.log(product);
    

  return (
    <div>
    <div>
                                                <img src={product.image} alt={product.title} height="50%" width="50%"/>
                                                <h3>{product.title}</h3>
                                                <p>{product.price}</p>
                                                <p>{product.brand}</p>
                                                </div>
                      
    </div>
  )
}

export default ProductDetails