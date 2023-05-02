import { useAppContext } from '../store/userContext'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {observer} from "mobx-react-lite"



const NavScroll = observer(() => {
  const { user } = useAppContext()


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to={'/shop'} style={{ fontSize: "1.5rem" }}>TechZone</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-3 mt-3"
            style={{ maxHeight: '100px' }}
          >
            {
              user._isAuth
                ?
                (
                  <>
                    <Button>Admin panel</Button>
                    <Button>Logout</Button>
                  </>
                )
                :
                (
                  <Button onClick={() => user.setIsAuth(true)}>Authorization</Button>
                )
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
})

export default NavScroll