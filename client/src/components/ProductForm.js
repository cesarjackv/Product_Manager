import React, { useState } from 'react'
import axios from 'axios';

// const ProductForm = () => {
//     //keep track of what is being typed via useState hook
//     const [title, setTitle] = useState(""); 
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");

//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new product
//         axios.post('http://localhost:8000/api/Products', {
//             title,
//             price,
//             description
//         })
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))
//     }

//     //onChange to update title, price, and description
//     return (
    // <form onSubmit={onSubmitHandler}>
        //     <p>
        //         <label>Title</label><br/>
        //         <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        //     </p>
        //     <p>
        //         <label>Price</label><br/>
        //         <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='$ '/>
        //     </p>
        //     <p>
        //         <label>Description</label><br/>
        //         <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        //     </p>
        //     <input type="submit" value='Create'/>
        // </form>
//     )
// }
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/Products', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    //onChange to update title, price, and description
    return (
        <form onSubmit={onSubmitHandler}>
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
            <input type="submit" value='Create'/>
        </form>
    )
}

export default ProductForm;
