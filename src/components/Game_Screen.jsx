import React, { useState } from "react";
import MakeOrder from "./make_order";

const Game_Screen = ({ handleGameOver }) => {
    const [showMakeOrder, setShowMakeOrder] = useState(false);
    const [activeOrderIndex, setActiveOrderIndex] = useState(null);
    const [score, setScore] = useState(0); // Add this line to initialize score
    const [orders, setOrders] = useState([
        { id: 1, ingredients: [], requiredIngredients: ["Hot Water", "Coffee Powder", "Sugar"], completed: false },
        { id: 2, ingredients: [], requiredIngredients: ["Milk", "Coffee Powder", "Ice"], completed: false },
        { id: 3, ingredients: [], requiredIngredients: ["Hot Water", "Coffee Powder", "Milk"], completed: false }
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

    const handleSubmitOrder = (orderIndex) => {
        const order = orders[orderIndex];
        
        // Check if all required ingredients are included
        const allIngredientsIncluded = order.requiredIngredients.every(ingredient => 
            order.ingredients.includes(ingredient)
        );

        if (allIngredientsIncluded && !order.completed) {
            // Update score
            setScore(prevScore => prevScore + 50);
            
            // Mark order as completed
            setOrders(prevOrders => {
                const newOrders = [...prevOrders];
                newOrders[orderIndex] = {
                    ...newOrders[orderIndex],
                    completed: true
                };
                return newOrders;
            });

            // Show success message
            alert(`Order completed successfully! You earned 50 points!\nTotal Score: ${score + 50}`);
        } else if (order.completed) {
            alert('This order has already been completed!');
        } else {
            alert('Please add all required ingredients before submitting!');
        }
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
            {/* Display score */}
            <div className="score-display">
                Score: {score}
            </div>

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
                            <button 
                                onClick={() => handleMakeOrder(index)}
                                disabled={order.completed}
                            >
                                Make Order
                            </button>
                            <button
                                onClick={() => handleSubmitOrder(index)}
                                disabled={order.completed}
                                className={order.completed ? 'completed-order' : ''}
                            >
                                Submit Order
                            </button>
                        </div>
                        {order.completed && <div className="completed-badge">✓ Completed!</div>}
                    </div>
                ))}
            </div>
            <button onClick={handleGameOver} className="game-over-button">Game Over</button>
        </div>
    );
};

export default Game_Screen;

