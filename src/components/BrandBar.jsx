import { observer } from "mobx-react-lite"
import { useAppContext } from "../store/userContext"
import { Row, Card, Col } from 'react-bootstrap'






export const BrandBar = observer(() => {
  const { device } = useAppContext()

  return (
    <Row className="d-flex gap-2" >
      {
        device.brands.map(item => <Col key={item.id} className="text-center" style={{ cursor: "pointer" }}>
          <Card
            style={{ textTransform: "capitalize" }}
            className="p-2"
            onClick={() => device.setSelectedBrand({id: item.id})}
            border={item.id === device.selectedBrand.id ? "danger" : "light"}
            key={item.id}>
            {item.name}
          </Card>
        </Col>)
      }
    </Row>
  )
})
