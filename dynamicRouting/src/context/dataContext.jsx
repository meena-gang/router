import { useState } from "react";
import { createContext,useEffect} from "react";
import {useParams} from 'react-router-dom';

export const dataContext = createContext();

export const DataContextProvider = ({children}) => {
    const[products, setProducts] = useState([]);
    const[product, setProduct] = useState({});
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[id, setId] = useState("");

    if(id){
        useEffect(() => {
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{setProduct(json)
                     setLoading(false)})
        .catch(err => {setError(true)
                        setLoading(false)});            
        },[id]);
    }
    else{
        useEffect(() => {
            setLoading(true);
            fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{setProducts(json)
                    setLoading(false)})
        .catch(err => {setError(true)
                        setLoading(false)}); 
        },[id]);
    }
    
    return <dataContext.Provider value={{products,product,setId,loading,error}}>
        {children}
    </dataContext.Provider>
}