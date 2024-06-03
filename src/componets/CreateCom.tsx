// import React from 'react'
import { useState } from 'react'

const CreateCom = () => {
  const [name, setname] = useState('')

  const alertSubmit = (event: any) => {
    event.preventDefault()
    alert(`Tên bạn nhập là :${name}`)
  }

  return (
    <div>
      <form onSubmit={alertSubmit}>
        <label>
          Nhập tên
          <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
}

export default CreateCom
