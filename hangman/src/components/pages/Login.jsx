// import React, { useState } from 'react';
// import './login.css'
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header'
// import Form from 'react-bootstrap/Form'
// import { Container, Row } from 'react-bootstrap';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const Navigate = useNavigate();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Redirect to /game page and pass username and password
//     //Navigate('/game', { username, password });

//     //log username and password to console
//     console.log('Username:', username);
//     console.log('Password:', password);

//     //redirect to game page and pass username and password
//     Navigate('/Game',{state: {username,password}});
//   }

//   const handleCreateAccount = (event)=>{
//     event.preventDefault();
//     //redirects to /accunt page
//     Navigate('/Account');
//   }

//   return (
//     <div>
//       <Header />
//       <br/><br/><br/>
//       <Container>
//         <Row>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mega" controlId="formBasicEmail">
//               <Form.Control type="username" placeholder="Username" variant="dark" value={username} onChange={handleUsernameChange}/>
//                 <br/>
//               </Form.Group>
//               <Form.Group className="mega" controlId="formBasicPassword">
//                 <Form.Control type="password" placeholder="Password" size="lg" value={password} onChange={handlePasswordChange} />
//               </Form.Group>
//             <Form.Group controlId="formBasicCheckbox">
//               <br/>
//             </Form.Group>
//             <Row>
//               <button type="submit" className="btn btn-dark mega">Submit</button>
//             </Row>
//             <br />
//             <Row>
//             <button type="button" className="btn btn-dark mega" onClick={handleCreateAccount}>
//               Create New Account
//             </button>
//             </Row>
//           </Form>
//         </Row>
//         <br/><br/><br/>
//       </Container>
//     </div>
//   )
// }

// export default Login;

//Below version adds voice-over functionality to click form fields. Specifically username and password voicing.


import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import Form from 'react-bootstrap/Form'
import { Container, Row } from 'react-bootstrap';
import TextToSpeech from '../TTS';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [speakText, setSpeakText] = useState(null);
  const Navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    Navigate('/Game',{state: {username,password}});
  }

  const handleCreateAccount = (event)=>{
    event.preventDefault();
    Navigate('/Account');
  }

  return (
    <div>
      <Header />
      <br/><br/><br/>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mega" controlId="formBasicEmail">
              <Form.Control type="username" placeholder="Username" variant="dark" value={username} onChange={handleUsernameChange}
              onClick={() => setSpeakText("Type in a username.")}/>
              <br/>
            </Form.Group>
            <Form.Group className="mega" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" size="lg" value={password} onChange={handlePasswordChange}
              onClick={() => setSpeakText("Type in a password.")}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <br/>
            </Form.Group>
            <Row>
              <button type="submit" className="btn btn-dark mega">Submit</button>
            </Row>
            <br />
            <Row>
            <button type="button" className="btn btn-dark mega" onClick={handleCreateAccount}>
              Create New Account
            </button>
            </Row>
          </Form>
        </Row>
        <br/><br/><br/>
      </Container>
      {speakText && <TextToSpeech text={speakText} />}
    </div>
  )
}

export default Login;