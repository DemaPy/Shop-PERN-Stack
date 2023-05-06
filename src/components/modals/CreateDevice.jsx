import { Button, Col, Dropdown, Form, Row } from "react-bootstrap"
import { useAppContext } from "../../store/userContext"
import { ModalCenter } from "../ModalCenter"
import { useEffect, useState } from "react"
import { createDevice, getBrands, getDevices, getTypes } from "../../http/deviceApi"
import { observer } from "mobx-react-lite"






const CreateDevice = observer((props) => {
  const { device } = useAppContext()
  const [info, setInfo] = useState([])

  const [deviceName, setDeviceName] = useState("")
  const [devicePrice, setDevicePrice] = useState(0)
  const [deviceFile, setDeviceFile] = useState(null)


  const selectFile = (e) => {
    setDeviceFile(e.target.files[0])
    console.log(e.target.files[0])
  }

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(item => item.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append("name", deviceName)
    formData.append("price", String(devicePrice))
    formData.append("img", deviceFile)
    formData.append("brandId", device.selectedBrand.id)
    formData.append("typeId", device.selectedType.id)
    formData.append("info", JSON.stringify(info))
    createDevice(formData).then(() => props.onHide())
  }

  useEffect(() => {
    getTypes().then(data => {
      device.setTypes(data)
    })
    getBrands().then(data => {
      device.setBrands(data)
    })
    getDevices().then(data => {
      device.setDevices(data.rows)
    })
  }, [])

  const body = (
    <Form className="d-flex flex-column gap-3" style={{maxHeight: "550px", overflowY: "scroll",  overflowX: "hidden"}}>
      <Dropdown>
        <Dropdown.Toggle style={{ textTransform: "capitalize" }} >{device.selectedType.name || "Choose type"}</Dropdown.Toggle>
        <Dropdown.Menu>
          {device.types.map(type => <Dropdown.Item
            style={{ textTransform: "capitalize" }}
            onClick={() => device.setSelectedType(type)}
            key={type.id}>
            {type.name}
          </Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle style={{ textTransform: "capitalize" }} >{device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
        <Dropdown.Menu>
          {device.brands.map(brand => <Dropdown.Item
            style={{ textTransform: "capitalize" }}
            onClick={() => device.setSelectedBrand(brand)}
            key={brand.id}>
            {brand.name}
          </Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <hr />
      <Form.Control value={deviceName} onChange={(e) => setDeviceName(e.target.value)} type="text" placeholder="Name of device" />
      <Form.Control value={devicePrice} onChange={(e) => setDevicePrice(Number(e.target.value))}  type="number" placeholder="Price of device" />
      <Form.Control onChange={(e) => selectFile(e)} type="file" placeholder="Select file" />
      <hr />
      <Button variant="outline-dark" onClick={() => addInfo()}>Add new property</Button>
      {
        info.map(i => (
          <Row key={i.number} className="mt-2">
            <Col md={4}>
              <Form.Control value={i.title} onChange={e => changeInfo("title", e.target.value, i.number)} placeholder="Name of property" />
            </Col>
            <Col md={4}>
              <Form.Control value={i.description} onChange={e => changeInfo("description", e.target.value, i.number)} placeholder="Description of property" />
            </Col>
            <Col md={4}>
              <Button
                variant="outline-danger"
                onClick={() => removeInfo(i.number)}>Delete property</Button>
            </Col>
          </Row>
        ))
      }
    </Form>
  )

  return (
    <ModalCenter create={() => addDevice()} body={body} title={"Add new device"} {...props} />
  )
})

export default CreateDevice