import { Button, Modal } from "react-bootstrap";


export const ModalCenter = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.body}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={props.create}>Submit</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
