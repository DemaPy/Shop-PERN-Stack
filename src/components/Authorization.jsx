import { Button, Card, Form } from "react-bootstrap"
import { Link, useOutletContext } from 'react-router-dom'


export const Authorization = () => {
  const context = useOutletContext()


  return (
    <Card style={{ width: "600px", padding: "26px", textAlign: "center" }}>
      <h2>Authorization</h2>
      <Form className="d-flex flex-column">
        <Form.Control value={context.email} type="email" onChange={(e) => context.setEmail(e.target.value)}  className="mt-3" placeholder="Your email"/>
        <Form.Control value={context.password} type="password" onChange={(e) => context.setPassword(e.target.value)} className="mt-3" placeholder="Your password"/>
        <Button onClick={() => context.signIn()} variant={"outline-success"} className="mt-3 align-self-end">Sign in</Button>
        <span>don&apos;t have an account? <Link to={'/registration'}>Sign up</Link> </span>
      </Form>
    </Card>
  )
}
