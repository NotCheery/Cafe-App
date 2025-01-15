import React from "react";

const Instructions = ({handleBack}) => {
    return (
        <div className="instructions">
        <h2>Instructions</h2>
        <ul>
            <li>You will receive orders</li>
            <li>Prepare drinks accurately to receive points</li>
            <li>That's all!</li>
        </ul>
        <button onClick={handleBack}>Back</button>
        </div>
    );
  };

  export default Instructions;