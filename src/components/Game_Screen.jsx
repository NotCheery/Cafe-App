import React from "react";

const Game_Screen = ({handleGameOver}) => {
    return (
        <div className="game-screen">
            <h1>Game Screen</h1>

            {/* Make JSON File for Orders and details to pull from randomly*/}
            {/* Make Order UI + Back button */}
            {/* Submit Order -> Check for correctness, store score */}
            <div className="Order">
                <h2>Order!</h2>
                <h4>Order details</h4>
                <p>Drink: Coffee</p>
                <p>Ingridients</p>
                <ul>
                    <li>Hot Water</li>
                    <li>Coffee powder</li>
                    <li>Sugar</li>
                    <li>Milk</li>
                </ul>
                <div className="button-container">
                    <button>Make Order</button>
                    <button>Submit Order</button>
                </div>
                
            </div>
           
            <button onClick={handleGameOver}>Game Over</button>
        </div>
    );
};

export default Game_Screen;