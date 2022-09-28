import { useState } from 'react'
import { images } from './util/data'
import './App.css'

import ProductCounter from './component/ProductCounter'

const App = () => {

  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div className='App'>
      <nav></nav>
      <main>
        <div className="product-images">
          <figure>
            {
              images.map((item, index) => (
                <img src={item.image} key={index} style={{ transform: `translateX(-${imgIndex * 100}%)` }} alt="" />
              ))
            }
          </figure>
          <div className="thumbnails">
            {
              images.map((item, index) => (
                <div className={`thumb ${index === imgIndex ? 'active' : ''}`} key={index} onClick={() => setImgIndex(index)}>
                  <img src={item.thumbnail} alt="" />
                </div>
              ))
            }
          </div>
        </div>

        <div className="product-details">
          <p>Sneaker Company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="price">
            <h3>$125.00</h3>
            <span>50%</span>
          </div>
          <div className="old-price">$250.00</div>
          <div className="actions">
            <ProductCounter />
            <button>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App