import { Button, Card, Form } from "react-bootstrap"
import { Link, useOutletContext } from 'react-router-dom'


export const Registration = () => {
  const context = useOutletContext()

  
  return (
    <Card style={{ width: "600px", padding: "26px", textAlign: "center" }}>
      <h2>Registration</h2>
      <Form className="d-flex flex-column">
        <Form.Control value={context.email} onChange={(e) => context.setEmail(e.target.value)} className="mt-3" type="email" placeholder="Your email"/>
        <Form.Control value={context.password} onChange={(e) => context.setPassword(e.target.value)} className="mt-3" type="password" placeholder="Your password"/>
        <Button onClick={() => context.signUp()} variant={"outline-success"} className="mt-3 align-self-end">Sign up</Button>
        <span>have an account? <Link to={'/login'}>Sign in</Link> </span>
      </Form>
    </Card>
  )
}
