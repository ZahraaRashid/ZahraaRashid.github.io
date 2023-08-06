import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import CombinedComponent from './CombinedComponent'; // Update the import path

const ORIGINAL_TEXT =
  "Hello friends. My name is ali and i am so excited to tell you a little bit about myself. i am 10 years old and I love exploring and learning new things every day I have a fantastic family that includes my mom dad"; // Your original text here

const Dictaphone = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.stopListening(); // Stop listening when the component mounts
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <CombinedComponent
        text={ORIGINAL_TEXT}
        isReading={false} // Set isReading to false, as we are not reading aloud
        transcript={transcript}
      />
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default Dictaphone;

