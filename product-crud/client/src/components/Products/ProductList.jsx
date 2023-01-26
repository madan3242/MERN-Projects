import Axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ProductList = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let url = `http://127.0.0.1:4000/api/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data);
             })
             .catch()
    }, []);
  return (<>
    <div className="container">
        <div className="row">
        {
            products.length > 0 ? <>
            {
                products.map(product => {
                    return <div className="col-lg-4 my-4" key={product._id}>
                        <div className="card">
                            <img src={product.image} alt="product" />
                            <div className="card-body">
                                {product.name}
                            </div>
                        </div>
                    </div>
                })
            }
            </> : <>
                <h2>No Products</h2>
            </>
        }
        </div>
    </div>
  </>)
}

export default ProductList