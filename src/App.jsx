import {useState} from 'react';
import './index.css';

const App = () => {

  // Show instructions
  const [showInstructions, setShowInstructions] = useState(false);

  const handleInstructions = () => {
    setShowInstructions(true);
  };

  const handleBack = () => {
    setShowInstructions(false);
  };

  const handleStart = () => {
    console.log("Start clicked");
  };

  // Instructions component
  const Instructions = () => (
    <div className="instructions">
      <h2>Instructions</h2>
      <ul>
        <li>You will receive an order</li>
        <li>Prepare drinks accurately</li>
        <li>Complete as many orders as you can</li>
        <li>Earn points to meet the quota for the day!</li>
      </ul>
      <button onClick={handleBack}>Back</button>
    </div>
  );

  // Main menu component
  const MainMenu = () => (
    <div>
      <h1>Cafe</h1>
      <h2>Welcome! Click on Instructions to get to know how to play, or click on Start to play!</h2>
      <button onClick={handleInstructions}>Instructions</button>
      <button onClick={handleStart}>Start</button>
    </div>
  )


  return (
    <div className="App">
      {showInstructions ? <Instructions/> : <MainMenu />}
    </div>
  );
}

export default App;
