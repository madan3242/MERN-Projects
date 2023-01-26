import React from 'react'
import image1 from "../Images/image-1.jpg"
import image2 from "../Images/image-2.jpg"

const Carousel = () => {
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-lg">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel