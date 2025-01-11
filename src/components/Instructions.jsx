import React from "react";

const Instructions = ({handleBack}) => {
    return (
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
  };

  export default Instructions;