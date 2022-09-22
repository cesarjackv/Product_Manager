import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';
import axios from 'axios';

// const Main = () => {
//     return (
//         <div>
//             <h1>Product Manager</h1>
//             <ProductForm/><br/>
//             <hr width='90%'/><br/>
//             <h1>All Products:</h1>
//             <AllProducts/>
//         </div>
//     )
// }
const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Products')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, [products]);

    const remove = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm/><br/>
            <hr width='90%'/><br/>
            <h1>All Products:</h1>
            {loaded && <AllProducts products={products} remove={remove}/>}
        </div>
    )
}


export default Main;