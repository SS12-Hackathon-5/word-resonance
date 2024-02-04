import './login.css'
import Header from '../Header'
import Form from 'react-bootstrap/Form'

const Login = () => {
  return (
    <div>
        <Header />
        <h1>Game Name</h1>
        <Form>
            <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control type="username" placeholder="Username" size="lg"/>
            <Form.Text className="text-muted">
                Come up with a name!
                <br /><br /><br />
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" size="lg" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <br /><br /><br />
            {/* <Form.Check type="checkbox" /> */}
            </Form.Group>
            <button type="submit" className="btn btn-light {/*centered-text*/}">Submit</button>
            
            
            <br /><br /><br /><br /><br /><br />
            <button type="submit" className="btn btn-light {/*centered-text*/}">Create New Account</button>  
        </Form>
    </div>
  )
}

export default Login