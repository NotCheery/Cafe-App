import {useState} from 'react';
import './index.css';
import Instructions from './components/Instructions'; 
import Game_Screen from './components/Game_Screen';


const App = () => {

  const [showInstructions, setShowInstructions] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); //track if game is active

  const handleInstructions = () => {
    setShowInstructions(true); //show instructions 
  }; 

  const handleBack = () => {
    setShowInstructions(false); //go back to menu
  }; 

  const handleStart = () => {
    setIsPlaying(true); //start playing
  }; 

  const handleGameOver = () => {
    setIsPlaying(false); //return to menu
  };


  // Main menu component
  const MainMenu = () => (
    <div className= "menu-container">
      <h1>Cafe</h1>
      <h2>Welcome! Click on Instructions to get to know how to play, or click on Start to play!</h2>
      <div className="button-container">
        <button onClick={handleInstructions}>Instructions</button>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );

  return (
    <div className="App">
        {isPlaying ? (
          <Game_Screen handleGameOver={handleGameOver} />
        ) : showInstructions ? (
          <Instructions handleBack={handleBack} />
        ) : (
          <MainMenu />
        )}
      </div>
  );
}

export default App;
