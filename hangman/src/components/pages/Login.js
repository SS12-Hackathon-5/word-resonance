import React from 'react'
import Form from 'react-bootstrap/Form'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
            <Form.Text className="text-muted">
                Come up with a name!
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    </div>
  )
}

export default Login