import Header from '../Header'
import './Account.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <h1>Create New Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newUsername">
          <Form.Label>New Username:</Form.Label>
          <Form.Control type="username" placeholder='Username' size ='lg' value={newUsername} onChange={handleUsernameChange} />
        </Form.Group>

        <Form.Group controlId="newPassword">
          <Form.Label>New Password:</Form.Label>
          <Form.Control type="password" placeholder='Password' size = 'lg' value={newPassword} onChange={handlePasswordChange} />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" placeholder='Password' size='lg'  value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default Account;