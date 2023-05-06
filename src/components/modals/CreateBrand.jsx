import { Form, FormControl } from "react-bootstrap"
import { ModalCenter } from "../ModalCenter"
import { useState } from "react"
import { createBrand } from "../../http/deviceApi"






const CreateBrand = (props) => {
  const [value, setValue] = useState("")
  const handleCreate = () => {
    createBrand({
      name: value
    }).then(() => {
      setValue("")
      props.onHide()
    })
  }

  const body = (
    <Form>
      <FormControl value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Name of brand"} />
    </Form>
  )

  return (
    <ModalCenter create={handleCreate} body={body} title={"Add new brand"} {...props}/>
  )
}

export default CreateBrand