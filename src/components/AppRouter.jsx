import { Routes, Route } from 'react-router-dom'
import { AdminPanel, Basket, DevicePage, Shop } from '../pages'
import { RequireAuth } from './RequireAuth'
import { Error } from './Error'
import { useState } from 'react'
import NavScroll from './Navbar'
import { Registration } from './Registration'
import { Authorization } from './Authorization'
import { Auth } from './Auth'






export const AppRouter = () => {
  const [isAuth, setAuth] = useState(false)

  return (
    <>
      <NavScroll/>
      <Routes>
        {/* <Route path='/auth' element={<Auth setAuth={setAuth} auth={isAuth}/>} /> */}
        <Route path='/' element={<Auth />}>
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Authorization />} />
        </Route>

        <Route path='*' element={<Error />} />

        <Route path='/' element={<RequireAuth isAuth={isAuth}/>}>
          <Route path='admin' element={<AdminPanel />} />
          <Route path='shop' element={<Shop />} />
          <Route path='device/:id' element={<DevicePage />} />
          <Route path='basket' element={<Basket />} />
        </Route>
      </Routes>
    </>
  )
}

