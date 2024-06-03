// import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProductType } from '~/common/product'
import { joiResolver } from '@hookform/resolvers/joi'
import schemasProduct from '../../../validation/product'
import { Container } from 'react-bootstrap'

type Props = {
  onAdd: (products: ProductType) => void
}
const ProductsAdd = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductType>({
    resolver: joiResolver(schemasProduct)
  })

  const onSubmit: SubmitHandler<ProductType> = (data: ProductType) => {
    props.onAdd(data)
  }
  return (
    <div>
      <h1>Add Product</h1>
      <Container>
        <form className='form text-center ' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group mt-5     '>
            <label htmlFor='title'>Tên sản phẩm</label>
            <input
              type='text'
              className='form-control mt-2 '
              id='title'
              placeholder='Tên sản phẩm...'
              {...register('title', { required: true, minLength: 3, maxLength: 100 })}
            />
            {errors.title && <span className='text-danger'>{errors.title.message}</span>}
          </div>
          <div className='form-group  mt-2 '>
            <label htmlFor='price'>Giá sản phẩm</label>
            <input
              type='text'
              className='form-control '
              id='price'
              placeholder='Giá sản phẩm...'
              {...register('price', { required: true, min: 0 })}
            />
            {errors.price && <span className='text-danger'>{errors.price.message}</span>}
          </div>
          <div className='form-group  mt-2 '>
            <label htmlFor='description'>Mô tả sản phẩm </label>
            <input
              type='text'
              className='form-control'
              id='description'
              placeholder='Mô tả sản phẩm...'
              {...register('description')}
            />
          </div>
          <button type='submit' className='btn btn-primary w-20 mt-5'>
            Add product
          </button>
        </form>
      </Container>
    </div>
  )
}

export default ProductsAdd
