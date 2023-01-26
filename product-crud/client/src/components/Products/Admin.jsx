import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

const Admin = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    let getProducts = () => {
        let url = `http://127.0.0.1:4000/api/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data);
             })
             .catch()
    }

    let deleteProduct = (productId) => {
        let delUrl = `http://127.0.0.1:4000/api/products/${productId}`;
        Axios.delete(delUrl)
             .then(() => {
                getProducts();
             })
             .catch()
    }
  return (<>
    <Navbar />
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg">
            {
                products.length > 0 ? <>
                    <table className="table table-striped">
                        <thead className="thread-dark bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Information</th>
                                <th>Update/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            products.map((product) => {
                                return <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} alt="" width="100px" /></td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.info}</td>
                                    <td>
                                        <Link className="btn btn-warning mr-1" to={`/update/${product._id}`}>Update</Link>
                                        <Link className="btn btn-danger" onClick={deleteProduct.bind(this, product._id)}>Delete</Link>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </> : <></>
            }
            </div>
        </div>
    </div>
  </>)
}

export default Admin