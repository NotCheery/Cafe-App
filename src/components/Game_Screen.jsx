import React, { useState } from "react";
import MakeOrder from "./make_order";

const Game_Screen = ({ handleGameOver }) => {
    const [showMakeOrder, setShowMakeOrder] = useState(false);
    const [orderIngredients, setOrderIngredients] = useState([]);

    const handleMakeOrder = () => {
        setShowMakeOrder(true);
    };

    const handleBack = () => {
        setShowMakeOrder(false);
    };

    const updateOrder = (ingredients) => {
        setOrderIngredients(ingredients);
    };

    if (showMakeOrder) {
        return <MakeOrder onBack={handleBack} updateOrder={updateOrder} />;
    }

    return (
        <div className="game-screen">
            <h1>Game Screen</h1>

            <div className="Order">
                <h2>Order!</h2>
                <h4>Order details</h4>
                <p>Drink: Coffee</p>
                <p>Ingredients:</p>
                <ul>
                    {orderIngredients.length === 0 ? (
                        <p>No ingredients selected yet.</p>
                    ) : (
                        orderIngredients.map((item, index) => <li key={index}>{item}</li>)
                    )}
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
