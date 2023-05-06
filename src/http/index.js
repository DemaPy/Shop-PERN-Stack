import axios from "axios"




const publicApi = axios.create({
  baseURL: "http://localhost:5000"
})


const privateApi = axios.create({
  baseURL: "http://localhost:5000"
})


const authInterceptor = (conifg) => {
    conifg.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return conifg
}
privateApi.interceptors.request.use(authInterceptor)

export {
    publicApi,
    privateApi
}

