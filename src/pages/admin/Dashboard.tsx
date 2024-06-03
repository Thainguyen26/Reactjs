// import { number } from 'joi'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductType } from '~/common/product'

type Props = {
  products: ProductType[]
  onDel: (id: number) => void
}

const Dashboard = ({ products, onDel }: Props) => {
  return (
    <div>
      <Container>
        <div>
          <h1>Hello, admin</h1>
          <Link className='btn btn-primary' to={'/admin/add'}>
            Thêm sản phẩm{' '}
          </Link>
          <table className='table table-bordered table-striped text-center mt-4 thead-dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>price</th>
                <th>thumbnail</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((pro) => (
                <tr key={pro.id}>
                  <td>{pro.id}</td>
                  <td>{pro.title}</td>
                  <td> $ {pro.price}</td>
                  <td>
                    <img src={pro.thumbnail} alt={pro.title} width={140} />
                  </td>
                  <td>{pro.description}</td>
                  <td>
                    <button
                      className=' btn btn-danger mb-2 '
                      onClick={() => {
                        onDel(Number(pro.id))
                      }}
                    >
                      DELETE
                    </button>
                    <Link to={`/admin/edit/${pro.id}`} className='btn btn-warning'>
                      EDIT
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
