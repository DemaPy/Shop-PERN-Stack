import { Row } from "react-bootstrap"
import { useAppContext } from "../store/userContext"
import { DeviceItem } from "./DeviceItem"
import { observer } from "mobx-react-lite"



const DeviceList = observer(() => {
  const {device} = useAppContext()
  return (
    <Row className="d-flex mt-5">
      {
        device.devices.map(item => <DeviceItem key={item.id} device={item}/>)
      }
    </Row>
  )
})

export default DeviceList