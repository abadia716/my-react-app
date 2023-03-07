import React, { useState } from 'react';
import './Traduccion.css';
import openai from 'openai';

if (openai && openai.promise) {
  openai.promise.setApiKey("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");
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  console.log('El reconocimiento de voz es compatible en este navegador');
} else {
  console.log('El reconocimiento de voz no es compatible en este navegador');
}

function Traduccion() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [outputText, setOutputText] = useState('');
  const [progress, setProgress] = useState(0);
  const [isListening, setIsListening] = useState(false);

  const handleStartListening = () => {
    setIsListening(true);
    recognition.onresult = event => {
      setInputText(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  const handleInputText = event => setInputText(event.target.value);
  const handleTargetLanguage = event => setTargetLanguage(event.target.value);
  const handleTranslate = async () => {
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    const model = "text-davinci-002";
    const prompt = `Traducir "${inputText}" al ${targetLanguage}`;

    try {
      const response = await openai.promise.text({
        model,
        prompt
      });
      setOutputText(response.choices[0].text);
    } catch (error) {
      console.error(error);
      setOutputText("Error al traducir el texto. Por favor, inténtelo de nuevo más tarde.");
    }
  };


  const handleDownload = () => {
    const data = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.download = `traduccion.txt`;
    link.href = url;
    link.click();
  };

 

  return (
    <div className="traduccion">
      <h1>Traducción</h1>
      <div className="inputs">
        <div className="input-container">
          <label htmlFor="inputText">Texto original</label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={handleInputText}
          />
          <div className="listen-container">
            <button
              className={`listen-button ${isListening ? "active" : ""}`}
              onClick={handleStartListening}
            >
              Escuchar
            </button>
            <button
              className="listen-button"
              onClick={handleStopListening}
              disabled={!isListening}
            >
              Parar
            </button>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="targetLanguage">Idioma objetivo</label>
          <select
            id="targetLanguage"
            value={targetLanguage}
            onChange={handleTargetLanguage}
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
            <option value="fr">Francés</option>
            <option value="de">Alemán</option>
            <option value="it">Italiano</option>
            <option value="pt">Portugués</option>
            <option value="nl">Holandés</option>
          </select>
        </div>
      </div>
      <button className="translate-button" onClick={handleTranslate}>
        Traducir
      </button>
      {outputText ? (
        <>
          <h2>Texto traducido</h2>
          <div className="output-container">
            <p>{outputText}</p>
            <button className="download-button" onClick={handleDownload}>
              Descargar
            </button>
          </div>
        </>
      ) : (
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}
export default Traduccion;
