import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
