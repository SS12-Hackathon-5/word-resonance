// import './Account.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const Account = () => {
//   const [username, setNewUsername] = useState('');
//   const [password, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true); //tracks the password match (state)

 
//   const Navigate = useNavigate();

//   const handleUsernameChange = (event) => {
//     setNewUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setNewPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   //function that checks the password match
//   const validatePassword = () =>{
//     const match = password === confirmPassword;
//     setPasswordsMatch(match);
//     return match;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     //check if the password matches before submiting
//     if(!validatePassword()){
//       return;
//     };

//     // checking if its being passed through
//     console.log('New Username:', username);
//     console.log('New Password:', password);
//     console.log('Confirmed Password:', confirmPassword);

//     //re-directs to /Game page 
//     Navigate('/Game',{state: {username,password}});
//   };

//   return (
//     <div>
//       <h1>Create New Account</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="newUsername">
//           <Form.Label>New Username:</Form.Label>
//           <Form.Control type="username" placeholder='Username' size ='lg' value={username} onChange={handleUsernameChange} />
//         </Form.Group>

//         <Form.Group controlId="newPassword">
//           <Form.Label>New Password:</Form.Label>
//           <Form.Control type="password" placeholder='Password' size = 'lg' value={password} onChange={handlePasswordChange} />
//         </Form.Group>

//         <Form.Group controlId="confirmPassword">
//           <Form.Label>Confirm Password:</Form.Label>
//           <Form.Control type="password" placeholder='Password' size='lg'  value={confirmPassword} onChange={handleConfirmPasswordChange} />
//           {!passwordsMatch && <Form.Control.Feedback type="invalid" style={{ fontSize: '36px' }}>Passwords do not match</Form.Control.Feedback>}
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Create Account
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Account;

import './Account.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

const Account = () => {
  const [username, setNewUsername] = useState('');
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); //tracks the password match (state)

  const Navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  //function that checks the password match
  useEffect(() => {
    const match = password === confirmPassword;
    setPasswordsMatch(match);
  }, [password, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //check if the password matches before submitting
    if(!passwordsMatch){
      return;
    };

    // checking if its being passed through
    console.log('New Username:', username);
    console.log('New Password:', password);
    console.log('Confirmed Password:', confirmPassword);

    //re-directs to /Game page 
    Navigate('/Game',{state: {username,password}});
  };

  return (
    <div>
      <h1>Create New Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newUsername">
          <Form.Control className="custom-text" type="username" placeholder='Username' size ='lg' value={username} onChange={handleUsernameChange} />
        </Form.Group>
        <br/>
        <Form.Group controlId="newPassword">
          <Form.Control className="custom-text" type="password" placeholder='Password' size = 'lg' value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <br/>
        <Form.Group controlId="confirmPassword">
          <Form.Control className="custom-text" type="password" placeholder='Confirm Password' size='lg'  value={confirmPassword} onChange={handleConfirmPasswordChange} isInvalid={!passwordsMatch} />
          <Form.Control.Feedback type="invalid">Passwords do not match</Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Row>
        <Button className="custom-text-2" variant="dark" type="submit">
          Create Account
        </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Account;