import React, { useState } from 'react';
import './Game.css';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const GameComponent = () => {
  const [show, setShow] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseHelp = () => setShowHelp(false);

  const handleShow = () => setShow(true);
  const handleShowHelp = () => setShowHelp(true);

  return (
    <div>
        <Container className="mt-5">
            <Row>
                <Col>
                <br/><br/><br/>
                <Row>
                <Button className="mega" variant="dark" onClick={handleShow}>
                  Start
                </Button>
                </Row>

<Modal show={show} onHide={handleClose} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>Select Difficulty</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Container>
      <Row className="mb-3">
        <Col>
          <Link to="/Hangman">
            <Button variant="dark" className="mega w-100">Easy</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="dark" className="mega w-100" onClick={handleClose}>Normal</Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="dark" className="mega w-100" onClick={handleClose}>Hard</Button>
        </Col>
      </Row>
    </Container>
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
            <Link to="/Leaderboard">
            <Button className="mega" variant="dark">Leaderboard</Button>
            </Link>
            </Row>
            <br/><br/><br/>
            <Row>
            <Button className="mega" variant="dark" onClick={handleShowHelp}>Help</Button>
              <Modal show={showHelp} onHide={handleCloseHelp} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Help</Modal.Title>
                  </Modal.Header>
                  
                  <Modal.Body>
                  You guess the letters of a word to solve the word. The length of the word is given by text to speech. You make your guess by talking into the microphone. You are allowed a given amount of wrong guesses before you are out of the game. 
                  </Modal.Body>
                </Modal>
        </Row>
        </Container>
    </div>
  );
}

export default GameComponent;
