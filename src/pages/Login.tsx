// import React from 'react'
import Joi from 'joi'
import { User } from '~/common/user'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import instance from '~/apis'
import { useNavigate } from 'react-router-dom'

const userSchemas = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(userSchemas)
  })

  const onSubmit = async (user: User) => {
    try {
      const { data } = await instance.post('/login', user)
      console.log(data)
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        window.confirm('Register success, switch to Admin page ') && navigate('/admin')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <h1>LOGIN</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <form className='text-center border rounded p-4 ' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group mt-5'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='Email...'
                {...register('email', { required: true, minLength: 3, maxLength: 100 })}
              />
              {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password...'
                {...register('password', { required: true, min: 0 })}
              />
              {errors.password && <span className='text-danger'>{errors.password.message}</span>}
            </div>
            <button type='submit' className='btn btn-primary btn-block mt-5'>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
