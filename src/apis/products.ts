import instance from '.'
import { ProductType } from '../common/product'

export const createProduct = async (product: ProductType) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async (product: ProductType) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteProduct = async (product: ProductType) => {
  try {
    const { data } = await instance.delete(`/products/${product.id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProducts = async () => {
  try {
    const { data } = await instance.get(`/products`)
    return data
  } catch (error) {
    console.log(error)
  }
}
