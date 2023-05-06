import { Routes, Route } from 'react-router-dom'
import { AdminPanel, Basket, DevicePage, Shop } from '../pages'
import { RequireAuth } from './RequireAuth'
import { Error } from './Error'
import NavScroll from './Navbar'
import { Registration } from './Registration'
import { Authorization } from './Authorization'
import { Auth } from './Auth'






export const AppRouter = () => {

  return (
    <>
      <NavScroll/>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Authorization />} />
        </Route>

        <Route path='*' element={<Error />} />

        <Route path='/' element={<RequireAuth/>}>
          <Route path='admin' element={<AdminPanel />} />
          <Route path='shop' element={<Shop />} />
          <Route path='device/:id' element={<DevicePage />} />
          <Route path='basket' element={<Basket />} />
        </Route>
      </Routes>
    </>
  )
}

