import { useOutletContext } from "react-router-dom";

export const AdminPanel = () => {
  const {isAuth} = useOutletContext();

  console.log(isAuth)

  return (
    <div>AdminPAnel</div>
  )
}
