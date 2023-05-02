import { Link } from "react-router-dom";






export const Navigation = () => (
  <nav>
    <Link to="/admin">Admin</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/basket">Basket</Link>
  </nav>
);