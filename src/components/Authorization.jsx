import { Button, Card, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'


export const Authorization = () => {
  return (
    <Card style={{ width: "600px", padding: "26px", textAlign: "center" }}>
      <h2>Authorization</h2>
      <Form className="d-flex flex-column">
        <Form.Control className="mt-3" placeholder="Your email"/>
        <Form.Control className="mt-3" placeholder="Your password"/>
        <Button variant={"outline-success"} className="mt-3 align-self-end">Sign in</Button>
        <span>don&apos;t have an account? <Link to={'/registration'}>Sign up</Link> </span>
      </Form>
    </Card>
  )
}
