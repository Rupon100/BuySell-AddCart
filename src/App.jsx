 
import { useState } from 'react'
import './App.css'
import Products from './Components/AllProducts/Products'
import Navbar from './Components/Header/Navbar'

function App() {
  const [addCart, setAddCart] = useState([]);
  const [addedPrice, setAddedPrice] = useState(0);
   
  // for add in addToCart
  const handleAddToCArt = (product, price) => {
    const isExist = addCart.find(p => p.id === product.id)
   // isExist ? alert('already added!') : setAddCart([...addCart, product]);
    if(isExist){
      alert('already added!')
    }else {
      const newPrice = addedPrice + price;
      setAddedPrice(newPrice);
      setAddCart([...addCart, product])
    }
  }

  // for remove from addToCart
  const handleRemove = (ac, price) => {
    const remove = addCart.filter(ap => ap.id !== ac.id);
    setAddCart(remove)
    const newPrice = addedPrice - price;
    setAddedPrice(newPrice);
  }

  return (
    <>
      <Navbar addCart={addCart} ttlPrice={addedPrice} handleRemove={handleRemove}></Navbar>
      <div>
        <Products handleAddToCArt={handleAddToCArt}></Products>
      </div>
    </>
  )
}

export default App
