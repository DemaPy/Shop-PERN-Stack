import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import { Navigation } from "./Navigation";






export function RequireAuth({isAuth}) {
  const location = useLocation()

  console.log(isAuth)

  if (!isAuth) {
    return <Navigate to='/auth' state={{from: location}} />
  }

  return (
    <>
      <Navigation />
      <Outlet context={{isAuth}}/>
    </>
  )
}


