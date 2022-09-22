import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
    
const AllProducts = (props) => {
    const navigate = useNavigate();
    const { remove } = props;

    const Delete = (id) => {
        axios.delete(`http://localhost:8000/api/Products/${id}`)
            .then(res => {
                remove(id)
                console.log(res);
            })
            .catch(err => console.error(err));
        
        navigate('/Products')
    };
    return (
        <div>
            {
                props.products.map( (product, idx) => {
                    //console.log(product)
                    return(
                        <div>
                            <span>
                                <a href={`http://localhost:3000/Products/${product._id}`} key={idx}>{product.title}</a>
                                <button onClick={ (e) => Delete(product._id) }>Delete</button>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

// const AllProducts = (props) => {
//     const [products, setProducts] = useState([])
//     const [loaded, setLoaded] = useState(false);
    
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/Products')
//             .then(res => {
//                 console.log(res.data.products)
//                 setProducts(res.data.products);
//                 setLoaded(true)
//             })
//             .catch(err => console.error(err));
//     }, []);
    
//     return (
//         <div>
//             {
//                 products.map( (product, idx) => {
//                     //console.log(product)
//                     return(
//                         <div>
//                             {loaded && <a href={`http://localhost:3000/Products/${product._id}`} key={idx}>{product.title}</a>}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default AllProducts;

