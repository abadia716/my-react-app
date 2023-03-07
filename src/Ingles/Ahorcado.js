import React, { useState, useEffect } from 'react';
import { words } from './datos';
import { Button, Form, FormGroup, Input} from 'reactstrap';


function Ahorcado() {
    const [currentWord, setCurrentWord] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6);

    useEffect(() => {
        setCurrentWord(getRandomWord());
    }, []);

    function getRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex].word.toLowerCase();
    }

    function handleGuess(event) {
        event.preventDefault();
        const letter = event.target.elements.letter.value.toLowerCase();

        if (letter.length === 1 && !guesses.includes(letter)) {
            setGuesses([...guesses, letter]);
            if (!currentWord.includes(letter)) {
                setRemainingAttempts(remainingAttempts - 1);
            }
        }

        event.target.reset();
    }

    function getDisplayWord() {
      if (currentWord === null) {
        return '';
      }
      return currentWord
        .split('')
        .map(letter => (guesses.includes(letter) ? letter : '_'))
        .join(' ');
    }

    function isGameWon() {
        return getDisplayWord().replace(/ /g, '') === currentWord;
    }

    function isGameOver() {
        return remainingAttempts === 0;
    }

    function handleReset() {
        setCurrentWord(getRandomWord());
        setGuesses([]);
        setRemainingAttempts(6);
    }

    return (
        <div className="container">
          <h1>Juego de Ahorcado</h1>
    
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="hangman">
                <div className="head"></div>
                <div className="body"></div>
                <div className="arm left"></div>
                <div className="arm right"></div>
                <div className="leg left"></div>
                <div className="leg right"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="word">
                <h2>{getDisplayWord()}</h2>
              </div>
    
              {isGameWon() && (
                <div className="alert alert-success" role="alert">
                  ¡Felicidades! Ganaste el juego.
                  <br />
                  <button className="btn btn-primary mt-3" onClick={handleReset}>Jugar de nuevo</button>
                </div>
              )}
    
              {isGameOver() && (
                <div className="alert alert-danger" role="alert">
                  ¡Lo siento! Se acabaron los intentos. La palabra era "{currentWord}".
                  <br />
                  <button className="btn btn-primary mt-3" onClick={handleReset}>Jugar de nuevo</button>
                </div>
              )}
    
              {!isGameWon() && !isGameOver() && (
                <div>
                  <Form onSubmit={handleGuess}>
                    <FormGroup>
                      <Input type="text" name="letter" maxLength="1" placeholder="Ingresa una letra" required />
                    </FormGroup>
                    <Button type="submit">Adivinar</Button>
                  </Form>
                  <div className="remaining-attempts">
                    Te quedan {remainingAttempts} intentos restantes.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default Ahorcado;
    