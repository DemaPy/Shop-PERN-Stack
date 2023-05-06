import { observer } from "mobx-react-lite"
import { AppRouter } from "./components/AppRouter"
import { useAppContext } from "./store/userContext"
import { useEffect, useState } from "react"
import { check } from "./http/userApi"
import { Spinner } from "react-bootstrap"

const App = observer(() => {
  const [loading, setLoading] = useState(true)
  const {user} = useAppContext()

  useEffect(() => {
    setTimeout(() => {
      check()
        .then(data => {
          user.setUser(data)
          user.setIsAuth(true)
        })
        .finally(() => setLoading(false))
    }, 3000)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <AppRouter />
  )
})

export default App
