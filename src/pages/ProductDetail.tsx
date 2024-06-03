import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductType } from '~/common/product'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductType>({
    id: 0,
    title: '',
    thumbnail: '',
    price: 0,
    description: ''
  })

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`) // Sử dụng productId thay vì params
        console.log(data)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    getProduct()
  }, [id]) // Thêm productId vào dependency array

  return (
    <>
      <h2>Chi tiết sản phẩm</h2>
      <div>
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt='' width={400} height={400} />
        <h5>{product.price}</h5>
        <p>{product.description}</p>
      </div>
    </>
  )
}

export default ProductDetail
