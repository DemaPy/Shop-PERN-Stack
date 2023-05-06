import { Container, Col, Row, Image, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useAppContext } from "../store/userContext"
import { useEffect, useState } from "react"
import { getDevices } from "../http/deviceApi"

export const DevicePage = () => {
  const [currDevice, setCurrDevice] = useState({})
  const { device } = useAppContext()
  const { id } = useParams()

  useEffect(() => {
    getDevices().then(data => {
      device.setDevices(data.rows)
    }).then(() => {
      const item = device.devices.filter(item => item.id == id)
      setCurrDevice(item[0])
    })
  }, [])

  console.log(currDevice.description)

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <h2 style={{textTransform: "capitalize"}}>{currDevice.name}</h2>
        <div>
          Rating: {currDevice.rating}
        </div>
      </Row>
      <Row>
        <Col>
          <Image height={300} width={300} src={"http://localhost:5000/"+currDevice.img} />
        </Col>
        <Col className="d-flex flex-column">
          <Row>
            <h2 style={{textTransform: "capitalize"}}>{currDevice.name}</h2>
            <div>
              Rating: {currDevice.rating}
            </div>
          </Row>
          <Row>
            <h3>
              Price: {currDevice.price}
            </h3>
          </Row>
          <Row className="mt-auto">
            <Button>Add to basket</Button>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        {
          currDevice?.description?.map(({id, title, description}) => {
            return (
              <Row key={id}>
                <span className="text-black-50">{title}{": "}</span>
                <span style={{ fontWeight: 600 }}>{description}</span>
              </Row>
            )
          })
        }
      </Row>
    </Container>
  )
}
