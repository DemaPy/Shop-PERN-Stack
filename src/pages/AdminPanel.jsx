import { Button, Container } from "react-bootstrap";
import { CreateType, CreateBrand, CreateDevice } from "../components/modals/";
import { useState } from "react";

export const AdminPanel = () => {
  const [type, setType] = useState(false);
  const [brand, setBrand] = useState(false);
  const [device, setDevice] = useState(false);

  return (
    <Container className="mt-5 d-flex flex-column">
      <Button onClick={() => setType(prev => !prev)} variant="outline-dark" className="mt-2">Add type</Button>
      <Button onClick={() => setBrand(prev => !prev)} variant="outline-dark" className="mt-2">Add brand</Button>
      <Button onClick={() => setDevice(prev => !prev)} variant="outline-dark" className="mt-2">Add device</Button>
      {type && <CreateType show={type} onHide={() => setType(prev => !prev)} />}
      {brand && <CreateBrand show={brand} onHide={() => setBrand(prev => !prev)} />}
      {device && <CreateDevice show={device} onHide={() => setDevice(prev => !prev)} />}
    </Container>
  )
}
