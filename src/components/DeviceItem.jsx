import { Card, Col, Image, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"






export const DeviceItem = ({ device }) => {
  const navigate = useNavigate()

  
  return (
    <Col md={3} className="mt-3" onClick={() => navigate("/device/" + device.id)}>
      <Card className="p-2" style={{ cursor: "pointer" }} border="primary">
        <Image width={150} height={150} src={"http://localhost:5000/" + device.img} />
        <Row>
          <Col>
            <div className="text-black-50">
                            Brand...
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-2 align-items-center">

              <div>{device.rating}</div>
              <div>start</div>
              {/* <Image width={15} height={15} src={device.img} /> */}
            </div>
          </Col>

        </Row>


        <div style={{textTransform: "capitalize"}}>
          {device.name}
        </div>
      </Card>
    </Col>
  )
}
