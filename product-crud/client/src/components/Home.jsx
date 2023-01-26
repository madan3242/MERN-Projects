import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import ProductList from './Products/ProductList'

const Home = () => {
  return (<>
    <Navbar />
    <div className="container">
        <Carousel />
        <h2>Products</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam ducimus aperiam perspiciatis. Quia enim nesciunt assumenda natus blanditiis, quos facilis unde architecto? Consequatur distinctio quam voluptatum repellat, ipsum possimus.</p>
    </div>
    <div className="container">
        <ProductList />
    </div>

  </>)
}

export default Home