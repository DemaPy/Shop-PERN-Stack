import { useAppContext } from '../store/userContext'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite"

const NavScroll = observer(() => {
  const { user } = useAppContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate("/login")
  }

  return (
    <Navbar style={{ backgroundColor: "#333", }} expand="lg">
      <Container>
        <Link to={'/shop'} style={{ fontSize: "1.5rem", color: "white", textDecoration: "none" }}>TechZone</Link>
        <Nav
          style={{ maxHeight: '100px', alignItems: "end", color: "white" }}
          className='gap-4'
        >

          {
            user.isAuth
              ?
              <>
                <Button onClick={() => navigate("/admin")}>Admin Panel</Button>
                <Button variant='outline-warning' onClick={() => handleLogout()}>Logout</Button>
              </>
              :
              <Button onClick={() => navigate("/login")}>Login</Button>
          }
        </Nav>
      </Container>
    </Navbar>
  );
})

export default NavScroll