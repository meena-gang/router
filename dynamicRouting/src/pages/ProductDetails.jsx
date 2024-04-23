import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../context/dataContext';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';

const ProductDetails = () => {

    const {setId,loading,error} = useContext(dataContext);
    const {id} = useParams();
   
    
    useEffect(() => {
        setId(id);
    },[id])
    
    const {product} = useContext(dataContext);

    const {image, price, title, description} = product;

  return (
    <div>
       { loading ?  "Fetching product details" :  error ? <p>Something wrong</p> : <div>
                                                <img src={image} alt={title} height="50%" width="50%"/>
                                                <h3>{title}</h3>
                                                <p>{price}</p>
                                                <p>{description}</p>
                                                </div>
        }                    
    </div>
  )
}

export default ProductDetails