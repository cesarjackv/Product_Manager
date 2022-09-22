import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OneProduct = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { remove } = props
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Products/${id}`)
            .then(res => {
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
    });

    const Delete = (id) => {
        axios.delete(`http://localhost:8000/api/Products/${id}`)
            .then(res => {
                remove(id)
            })
            .catch(err => console.error(err));
        
        navigate('/Products')
    };

    const color = {'color': 'red'}
    
    return (
        <div>
            <h1>{product.title}</h1>
            <p><strong>Price:   </strong>{`$${product.price}`}</p>
            <p><strong>Description:    </strong>{product.description}</p> <br/>
            <button style={color} onClick={ (e) => Delete(id) }>
                Delete
            </button>
        </div>
    )
}

export default OneProduct;