import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"



export function Error() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let id = setTimeout(() => {
      navigate('/login')
    }, 5000)

    return () => {
      clearTimeout(id)
    }
  }, [])



  return (
    <>
      {
        location?.pathname
          ?
          (
            <h2>You are trying get access to {location.pathname}. <br /> You will be redirected to registration page in 5 second</h2>
          )
          :
          (
            <h2>You will be redirected to home page in 5 seconds</h2>
          )
      }

    </>
  )
}

