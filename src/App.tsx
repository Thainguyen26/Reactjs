import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import { Header } from './componets/Header'

import ProductDetail from './pages/ProductDetail'
import Footer from './componets/Footer'
import Form from './pages/Form'
import { useEffect, useState } from 'react'
import { ProductType } from './common/product'
// import axios from 'axios'
import Dashboard from './pages/admin/Dashboard'
import ProductsAdd from './pages/admin/ProductsAdd'
import { createProduct, updateProduct } from './apis/products'
import axios from 'axios'
import ProductsEdit from './pages/admin/ProductsEdit'
import instance from './apis'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  const navigate = useNavigate()
  const [products, setProduct] = useState<ProductType[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('http://localhost:3000/products')
      console.log(data)
      setProduct(data)
    })()
  }, [])
  const handleAddProduct = (product: ProductType) => {
    ;(async () => {
      const data = await createProduct(product)
      setProduct([...products, data])
    })()
    navigate('/admin')
  }
  const handleEditProduct = (product: ProductType) => {
    ;(async () => {
      const data = await updateProduct(product)
      setProduct(products.map((p) => (p.id === data.id ? data : p)))
    })()
    navigate('/admin')
  }

  const handleDeleteProduct = (id: number) => {
    ;(async () => {
      const isConfirm = window.confirm('Are you sure?')
      if (isConfirm) {
        const data = await instance.delete(`/products/${id}`)
        console.log(data)
        setProduct(products.filter((item) => item.id !== id && item))
      }
    })()
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/create' element={<Form />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} onDel={handleDeleteProduct} />} />
          <Route path='/admin/add' element={<ProductsAdd onAdd={handleAddProduct} />} />
          <Route path='/admin/edit/:id' element={<ProductsEdit onEdit={handleEditProduct} />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
export default App
