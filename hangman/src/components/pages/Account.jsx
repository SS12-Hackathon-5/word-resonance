import './Account.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row } from 'react-bootstrap';

const Account = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., update user account
    console.log('New Username:', newUsername);
    console.log('New Password:', newPassword);
    console.log('Confirmed Password:', confirmPassword);
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="custom-text">Create New Account</div>
        </Row>
        <br/><br/><br/>
        <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="newUsername">
            <Form.Control className="custom-text" type="username" placeholder='Username' size ='lg' value={newUsername} onChange={handleUsernameChange} />
          </Form.Group>
          <br/><br/>
          <Form.Group controlId="newPassword">
            <Form.Control className="custom-text" type="password" placeholder='Password' size = 'lg' value={newPassword} onChange={handlePasswordChange} />
          </Form.Group>
          <br/><br/>
          <Form.Group controlId="confirmPassword">
            <Form.Control className="custom-text" type="password" placeholder='Confirm Password' size='lg'  value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Group>
          <br/><br/>
          <Row>
          <button type="submit" className="btn btn-dark mega">
              Create Account
          </button> 
          </Row>  
        </Form>
        </Row>
        <br/><br/><br/>
      </Container>
    </div>
  );
};

export default Account;