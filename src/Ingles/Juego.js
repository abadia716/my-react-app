import React, { useState } from 'react';
import { words } from './datos.js';
import './Juego.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Juego() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * words.word.length);
    const question = words[randomIndex];
    setCurrentQuestion(question);
    setAnsweredCorrectly(false);
  }

  function handleAnswer(selectedSynonym) {
    if (selectedSynonym === currentQuestion.synonym) {
      setAnsweredCorrectly(true);
    }
    generateQuestion();
  }

  if (currentQuestion === null) {
    generateQuestion();
    return null;
  }

  const options = [currentQuestion.synonym];
  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * words.word.length);
    const randomWord = words[randomIndex].synonym;
    if (!options.includes(randomWord)) {
      options.push(randomWord);
    }
  }
  shuffleArray(options);

  return (
    <Container className="juego-container">
      <Row>
        <Col>
          <h2 className="text-center mb-4">¿Cuál es el sinónimo de "{currentQuestion.word}"?</h2>
          <div className="d-flex flex-column">
            {options.map((option, index) => (
              <Button
                key={index}
                variant={answeredCorrectly && option === currentQuestion.synonym ? "success" : "primary"}
                className="my-2"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

  };

 }  
export default Juego;
