import React, { useState } from 'react';
import './Game.css';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const GameComponent = () => {
  

  const [showStart, setShowStart] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showHelp, setShowHelp] = useState(false);



  const handleCloseStart = () => setShowStart(false);
  const handleCloseLeaderboard = () => setShowLeaderboard(false);
  const handleCloseHelp = () => setShowHelp(false);

  const handleShowStart = () => setShowStart(true);
  const handleShowLeaderboard = () => setShowLeaderboard(true);
  const handleShowHelp = () => setShowHelp(true);

  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Button variant="dark" className="mega" onClick={handleShowStart}>
                  Start
                </Button>

                <Modal show={showStart} onHide={handleCloseStart} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Select Difficulty</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Button variant="dark" className="mega" onClick={handleCloseStart}>Easy</Button>
                    <br/><br/>
                    <Button variant="dark" className="mega" onClick={handleCloseStart}>Normal</Button>
                    <br/><br/>
                    <Button variant="dark" className="mega" onClick={handleCloseStart}>Hard</Button>
                  </Modal.Body>
                </Modal>
                </Col>
            </Row>
            <br/><br/><br/>
            <Row>
            <Button className="mega" variant="dark">Continue</Button>
            </Row>
            <br/><br/><br/>
            <Row>
            <Button className="mega" variant="dark" onClick= {handleShowLeaderboard}>
            Leaderboard</Button>
            <Modal show={showLeaderboard} onHide={handleCloseLeaderboard} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Leaderboard</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  1st 
                  </Modal.Body>
                  <Modal.Body>
                  2nd 
                  </Modal.Body>
                  <Modal.Body>
                  3rd 
                  </Modal.Body>
                </Modal>
            </Row>
            <br/><br/><br/>
            <Row>
            <Button className="mega" variant="dark" onClick={handleShowHelp}>
              Help</Button>
              <Modal show={showHelp} onHide={handleCloseHelp} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Help</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  You guess the letters of a word to solve the word. The word is given by text to speech. You make your guess by talking into the microphone. You are allowed 6 wrong before you are out of the game. 

                  </Modal.Body>
                </Modal>
        </Row>
        </Container>
    </div>
  );
}

export default GameComponent;
