// import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProductType } from '~/common/product'
import { joiResolver } from '@hookform/resolvers/joi'
import schemasProduct from '../../../validation/product'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'

type Props = {
  onEdit: (products: ProductType) => void
}
const ProductsEdit = ({ onEdit }: Props) => {
  const [product, setProducts] = useState<ProductType | null>(null)
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProducts(data)
    })()
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductType>({
    resolver: joiResolver(schemasProduct)
  })

  const onSubmit = (product: ProductType) => {
    onEdit({ ...product, id })
  }
  return (
    <div>
      <h1>Edit Product</h1>
      <Container>
        <form className='form text-center ' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group mt-5     '>
            <label htmlFor='title'>Tên sản phẩm</label>
            <input
              type='text'
              className='form-control mt-2 '
              {...register('title', { required: true, minLength: 3, maxLength: 100 })}
              defaultValue={product?.title}
            />
            {errors.title && <span className='text-danger'>{errors.title.message}</span>}
          </div>
          <div className='form-group  mt-2 '>
            <label htmlFor='price'>Giá sản phẩm</label>
            <input
              type='text'
              className='form-control '
              {...register('price', { required: true, min: 0 })}
              defaultValue={product?.price}
            />
            {errors.price && <span className='text-danger'>{errors.price.message}</span>}
          </div>
          <div className='form-group  mt-2 '>
            <label htmlFor='description'>Mô tả sản phẩm </label>
            <input
              type='text'
              className='form-control'
              {...register('description')}
              defaultValue={product?.description}
            />
          </div>
          <button type='submit' className='btn btn-primary w-20 mt-5'>
            Submit
          </button>
        </form>
      </Container>
    </div>
  )
}

export default ProductsEdit
