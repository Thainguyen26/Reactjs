// import { Link } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export const Header = () => {
  return (
    <header>
      <Nav variant='tabs' defaultActiveKey='/home' style={{ backgroundColor: 'rosybrown' }}>
        <Nav.Item>
          <NavLink href='/' style={{ color: 'red', fontSize: '20px' }}>
            Trang chủ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href='/' style={{ color: 'red', fontSize: '20px' }}>
            Trang sản phẩm
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href='/register' style={{ color: 'red', fontSize: '20px' }}>
            Regiter
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href='/login' style={{ color: 'red', fontSize: '20px' }}>
            Login
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href='/admin' style={{ color: 'red', fontSize: '20px' }}>
            Admin
          </NavLink>
        </Nav.Item>
      </Nav>
    </header>
  )
}
