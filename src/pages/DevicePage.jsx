import { useParams } from "react-router-dom"

export const DevicePage = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>DevicePage</div>
  )
}
