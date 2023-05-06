import { Container, Row, Col } from "react-bootstrap"
import { TypeBar } from "../components/TypeBar"
import { BrandBar } from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from "mobx-react-lite"
import { useAppContext } from "../store/userContext"
import { useEffect } from "react"
import { getBrands, getDevices, getTypes } from "../http/deviceApi"
import { Pages } from "../components/Pages"



export const Shop = observer(() => {

  const {device} = useAppContext()

  useEffect(() => {
    getTypes().then(data => {
      device.setTypes(data)
    })
    getBrands().then(data => {
      device.setBrands(data)
    })
    getDevices(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    getDevices(device.selectedType.id, device.selectedBrand.id, device.activePage, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.activePage, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList />
          <Pages/>
        </Col>
      </Row>
    </Container>
  )
})
