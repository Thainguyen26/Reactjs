// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import instance from '~/apis'
import { ProductType } from '~/common/product'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
type Props = {
  products: ProductType[]
}

const Home = ({ products }: Props) => {
  return (
    <div>
      <h3 className='text-center text-primary p-3  '>Danh sách sản phẩm</h3>
      <Container style={{}}>
        <Row>
          {products?.map((product) => (
            <Col key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img width={400} height={400} src={product.thumbnail} alt={product.title} />
              </Link>
              <h4 className='m-3 text-info' style={{ height: '90px' }}>
                {product.title}
              </h4>
              <h3 className='text-center text-danger '>$ {product.price} </h3>
              {/* <p style={{ height: '100px', textAlign: 'center' }}>{product.description}</p> */}

              <div className='text-center'>
                <button className='btn btn-success m-4'>Thêm vào giỏ hàng</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home
