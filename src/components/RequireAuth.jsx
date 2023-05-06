import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAppContext} from "../store/userContext"





export function RequireAuth() {
  const location = useLocation()
  const {user} = useAppContext()


  if (!user.isAuth) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return (
    <>
      {/* <Navigation /> */}
      <Outlet />
    </>
  )
}


