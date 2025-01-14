import React, { useState } from "react";
import MakeOrder from "./make_order";

const Game_Screen = ({handleGameOver}) => {

    const [showMakeOrder, setShowMakeOrder] = useState(false);

    const handleMakeOrder = () => {
        setShowMakeOrder(true);
    };

    const handleBack = () => {
        setShowMakeOrder(false);
    };
    if (showMakeOrder) {
        return <MakeOrder onBack={handleBack} />;
    }

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
                    <button onClick={handleMakeOrder}>Make Order</button>
                    <button>Submit Order</button>
                </div>
            </div>
            <button onClick={handleGameOver} className="game-over-button">Game Over</button>
        </div>
    );
};

export default Game_Screen;