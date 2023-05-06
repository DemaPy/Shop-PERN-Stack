import { publicApi, privateApi } from ".";
import jwt_decode from "jwt-decode";


export const registration = async (email, password) => {
  const {data} = await publicApi.post('/api/user/registration', {
    email,
    password,
    role: "ADMIN"
  })

  localStorage.setItem("token", data.token)

  return jwt_decode(data.token)
}


export const login = async (email, password) => {
  const {data} = await publicApi.post('/api/user/login', {
    email,
    password,
  })

  localStorage.setItem("token", data.token)
  return jwt_decode(data.token)
}


export const check = async () => {
  const {data} = await privateApi.get('/api/user/auth')
  
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token)
}