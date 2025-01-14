import React, { useState } from "react";
import MakeOrder from "./make_order";

const Game_Screen = ({ handleGameOver }) => {
    const [showMakeOrder, setShowMakeOrder] = useState(false);
    const [activeOrderIndex, setActiveOrderIndex] = useState(null);
    const [orders, setOrders] = useState([
        { id: 1, ingredients: [], requiredIngredients: ["Hot Water", "Coffee Powder", "Sugar"] },
        { id: 2, ingredients: [], requiredIngredients: ["Milk", "Coffee Powder", "Ice"] },
        { id: 3, ingredients: [], requiredIngredients: ["Hot Water", "Coffee Powder", "Milk"] }
    ]);

    const handleMakeOrder = (orderIndex) => {
        setActiveOrderIndex(orderIndex);
        setShowMakeOrder(true);
    };

    const handleBack = () => {
        setShowMakeOrder(false);
        setActiveOrderIndex(null);
    };

    const updateOrder = (ingredients) => {
        setOrders(prevOrders => {
            const newOrders = [...prevOrders];
            newOrders[activeOrderIndex] = {
                ...newOrders[activeOrderIndex],
                ingredients: ingredients
            };
            return newOrders;
        });
    };

    if (showMakeOrder) {
        return (
            <MakeOrder 
                onBack={handleBack} 
                updateOrder={updateOrder}
                requiredIngredients={orders[activeOrderIndex].requiredIngredients}
                currentIngredients={orders[activeOrderIndex].ingredients}
            />
        );
    }

    return (
        <div className="game-screen">
            <div className="orders-container">
                {orders.map((order, index) => (
                    <div className="Order" key={order.id}>
                        <h2>Order {order.id}!</h2>
                        <h4>Order details</h4>
                        <p>Drink: Coffee</p>
                        <p>Required Ingredients:</p>
                        <ul>
                            {order.requiredIngredients.map((ingredient, i) => (
                                <li key={i} style={{
                                    textDecoration: order.ingredients.includes(ingredient) ? 'line-through' : 'none'
                                }}>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                        <div className="button-container">
                            <button onClick={() => handleMakeOrder(index)}>Make Order</button>
                            <button>Submit Order</button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleGameOver} className="game-over-button">Game Over</button>
        </div>
    );
};
    

export default Game_Screen;
