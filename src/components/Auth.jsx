import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userApi'
import { observer } from "mobx-react-lite"
import { useAppContext } from '../store/userContext'





export const Auth = observer(() => {
  const {user} = useAppContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signUp = async () => {
    const response = await registration(email, password)

    console.log("Response from Registration: ", response)
    return response
  }

  const signIn = async () => {
    try {
      const data = await login(email, password)

      console.log("Response from Login: ", data)
      user.setUser(true)
      user.setIsAuth(true)
      navigate("/shop")
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message)
    }
  }

  const context = {
    email,
    password,
    setEmail,
    setPassword,
    signUp,
    signIn
  }


  return (
    <Container style={{
      height: window.innerHeight - 56
    }} className='d-flex justify-content-center align-items-center'>
      <Outlet context={context}/>
    </Container>
  )
})
