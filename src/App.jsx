import React, { useRef } from "react";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Use the captured image as required (e.g., display it on the page)
    console.log(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture</button>
    </div>
  );
}

export default App;
