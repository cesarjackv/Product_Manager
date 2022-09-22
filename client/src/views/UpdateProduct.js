import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const UpdateProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Products/${id}`)
            .then(res => {
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
        });
    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
        
    const update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/Products/${id}`,{
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        
        navigate('/Products')
    };


    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={update}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='$ '/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value='Update'/>
        </form>
        </div>
    )
}

export default UpdateProduct;