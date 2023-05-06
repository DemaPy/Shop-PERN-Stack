import { Form, FormControl } from "react-bootstrap"
import { ModalCenter } from "../ModalCenter"
import { useState } from "react"
import { createType } from "../../http/deviceApi"






const CreateType = (props) => {
  const [value, setValue] = useState("")
  const handleCreate = () => {
    createType({
      name: value
    }).then(() => {
      setValue("")
      props.onHide()
    })
  }

  const body = (
    <Form>
      <FormControl value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Name of type"} />
    </Form>
  )

  return (
    <ModalCenter body={body} create={handleCreate} title={"Add new type"} {...props} />
  )
}

export default CreateType