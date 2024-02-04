import React, { useState } from 'react';
import './Game.css';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const GameComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Button className="mega" variant="dark" onClick={handleShow}>
                  Start
                </Button>

                <Modal show={show} onHide={handleClose} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Select Difficulty</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Link to="/Hangman">
                    <Button variant="dark" className="mega">Easy</Button>
                    </Link>
                    <br/><br/>
                    <Button variant="dark" className="mega" onClick={handleClose}>Normal</Button>
                    <br/><br/>
                    <Button variant="dark" className="mega" onClick={handleClose}>Hard</Button>
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
            <Button className="mega" variant="dark">Leaderboard</Button>
            </Row>
            <br/><br/><br/>
            <Row>
            <Button className="mega" variant="dark">Help</Button>
        </Row>
        </Container>
    </div>
  );
}

export default GameComponent;