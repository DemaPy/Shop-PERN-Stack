import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'






export const Auth = () => {
  return (
    <Container style={{
        height: window.innerHeight - 56
    }} className='d-flex justify-content-center align-items-center'>
      <Outlet/>
    </Container>
  )
}
