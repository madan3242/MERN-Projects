import Axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import ProductForm from './ProductForm'

const UpdateProduct = () => {
    let [productId] = useState(useParams().id);

    const[product, setProduct] = useState({
        name: "", image: "", price: "", qty: "", info: ""
    });
    let navigate = useNavigate();
    let btn = "Update";

    useEffect(() => {
        let url = `http://127.0.0.1:4000/api/products/${productId}`;
        Axios.get(url)
             .then((response) => {
                setProduct(response.data)
             })
             .catch()
    }, [productId])

    let productHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    let imageHandler = async (e) => {
        let imagefile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imagefile);
        reader.addEventListener('load', () => {
            if(reader.result){
                setProduct({
                    ...product,
                    image: reader.result
                })
            }else{
                alert("Error...")
            }
        })
    }

    let submitHandler = (e) => {
        e.preventDefault();
        let url = `http://127.0.0.1:4000/api/products/${productId}`
        Axios.put(url, product)
             .then((res) => {
                navigate('/admin');
             })
             .catch((err) => {

             })
    }

  return (<>
    <Navbar />
    <ProductForm product={product} productHandler={productHandler} imageHandler={imageHandler} submitHandler={submitHandler} btn={btn} />
  </>)
}

export default UpdateProduct