import React, { useState } from 'react';
//import { Navigate, useHistory, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css'
import Header from '../Header'
import Form from 'react-bootstrap/Form'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to /game page and pass username and password
    //Navigate('/game', { username, password });

    //log username and password to console
    console.log('Username:', username);
    console.log('Password:', password);

    //redirect to game page and pass username and password
    Navigate('/Game',{state: {username,password}});
  }

  const handleCreateAccount = (event)=>{
    event.preventDefault();
    //redirects to /accunt page
    Navigate('/Account');
  }

  return (
    <div>
        <Header />
        <h1>Game Name</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="username" placeholder="Username" size="lg" value={username} onChange={handleUsernameChange}/>
            <Form.Text className="text-muted">
                Come up with a name!
                <br /><br /><br />
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" size="lg" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <br /><br /><br />
            </Form.Group>
            <button type="submit" className="btn btn-light">Submit</button>
            <br /><br /><br /><br /><br /><br />
            <button type="button" className="btn btn-light" onClick={handleCreateAccount}>
          Create New Account
        </button>
        </Form>
    </div>
  )
}

export default Login;