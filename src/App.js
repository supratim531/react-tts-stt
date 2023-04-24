import { useEffect } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition/lib/SpeechRecognition";

function App() {
  const { speak } = useSpeechSynthesis();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const listen = () => {
    speak({ text: transcript });
  }

  useEffect(() => {
    console.log(browserSupportsSpeechRecognition);

    if (!browserSupportsSpeechRecognition) {
      alert("Your Browser doesn't support Speech To Text");
    }
  }, []);

  return (
    <div className="">
      <div className="">Microphone: {listening ? "on" : "off"} <span>{listening ? "(say something...)" : ""}</span></div>
      <button onClick={() => { SpeechRecognition.startListening({ continuous: false }) }}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <div className="">
        <span><b>You're saying: </b></span>
        <span>{transcript ? transcript : "Nothing"}</span>
      </div>
      <button onClick={listen}>Listen Your Words</button>
    </div>
  );
}

export default App;
