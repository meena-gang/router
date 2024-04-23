import React, { useEffect, useState } from 'react'
import { useSearchParams,Link } from 'react-router-dom';

const Products = () => {
    const[products, setProducts] = useState([]);
    const[searchParams, setSearchParams] = useSearchParams();
    const[category, setCategory] = useState(searchParams.get('filter')||"");
    const[order, setOrder] = useState(searchParams.get('order')||"");
    const[price, setPrice] = useState(searchParams.get('sort')||"");
    
    
   const categoryHandler = (e) => {
        setCategory(e.target.value);
        setSearchParams({filter : e.target.value,sort:price,order:order});
   }
   const priceHandler = (e) => {
      if(e.target.value == ""){
        setPrice("")
      }else{
        setPrice("price");
      }
        setOrder(e.target.value);
        setSearchParams({filter:category,sort:e.target.value?"price":"",order:e.target.value});
   }
  
   useEffect(() =>  {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/?filter=${category}&sort=${price}&order=${order}`)
   .then(res=>res.json())
   .then(json=>setProducts(json.data))
},[order,category]);
   
  return (
    <div style={{display:"flex", gap:"20px"}}>
        <div>
            <div>Category
            <select onChange={categoryHandler}>
                <option value="all">All</option>
               <option value="men">men</option>
               <option value="women">women</option>
               <option value="kids">kids</option>
            </select>
            </div>
            <div>Price
            <select onChange={priceHandler}>
               <option value=""></option>
               <option value="asc">low to high</option>
               <option value="desc">high to low</option>
            </select>
            </div>
        </div>
        <div style={{display: "grid",gridTemplateColumns: "repeat(3,1fr)", gap:"50px"}}>
        {products.map((product) => <div key={product.id}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <Link to={`/productDetails/${product.id}`}>Click to view product details</Link>
        </div>)}
     </div>
    </div>
  )
}

export default Products