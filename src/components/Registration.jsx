import React from 'react'
import { Button, Card, Container, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'


export const Registration = () => {
  return (
    <Card style={{ width: "600px", padding: "26px", textAlign: "center" }}>
      <h2>Registration</h2>
      <Form className="d-flex flex-column">
        <Form.Control className="mt-3" placeholder="Your email"/>
        <Form.Control className="mt-3" placeholder="Your password"/>
        <Button variant={"outline-success"} className="mt-3 align-self-end">Sign up</Button>
        <span>have an account? <Link to={'/login'}>Sign in</Link> </span>
      </Form>
    </Card>
  )
}
