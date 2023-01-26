import React from 'react'
import { Link } from 'react-router-dom'

const ProductForm = ({ product, productHandler, imageHandler, submitHandler, btn }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-5 mx-auto mt-3">
                <Link className="btn btn-primary" to="/admin">Go Back</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5 mx-auto mt-5">
                <pre>{JSON.stringify(product)}</pre>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Product Name" name="name" value={product.name} onChange={productHandler} />
                    </div>
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" name="image"  onChange={imageHandler} />
                            <label htmlFor="customFile" className="custom-file-label">Product Image</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Product Price" name="price" value={product.price} onChange={productHandler} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Product Qty" name="qty" value={product.qty} onChange={productHandler} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Product Info" name="info" value={product.info} onChange={productHandler} />
                    </div>
                    <input type="submit" value={btn} className="btn btn-success" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ProductForm