import { createContext, useContext } from "react"
import { UserStore } from "./UserStore"
import { DeviceStore } from "./DeviceStore"

const Context = createContext(null)


export const useAppContext = () => {
  const data = useContext(Context)

  return data
}


export function UserProvider({ children }) {

  return (
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
      {children}
    </Context.Provider>
  )
}