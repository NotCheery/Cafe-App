import React, { useState } from "react";

const MakeOrder = ({ onBack, updateOrder, requiredIngredients, currentIngredients }) => {
    const fridgeIngredients = ["Milk", "Ice", "Frosting"];
    const pantryIngredients = ["Sugar", "Hot Water", "Coffee Powder", "Sprinkles", "Candycane"];

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("text/plain", item);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const item = event.dataTransfer.getData("text/plain");
        if (!selectedIngredients.includes(item)) {
            const newIngredients = [...selectedIngredients, item];
            setSelectedIngredients(newIngredients);
            updateOrder(newIngredients);
        }
    };

    const isIngredientRequired = (ingredient) => {
        return requiredIngredients.includes(ingredient);
    }

    // Amazon q asked this to be deleted
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="make-order">
            <h2>Make Order</h2>
            <div className="required-ingredients">
                <h3>Required Ingredients</h3>
                <ul>
                    {requiredIngredients.map((ingredient, index) => (
                        <li key={index} style={{ 
                            textDecoration: currentIngredients.includes(ingredient) ? 'line-through' : 'none' 
                        }}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
                <div>
                    <h3>Fridge Ingredients</h3>
                    <div className="ingredient-list">
                        {fridgeIngredients.map((ingredient) => (
                            <button
                                key={ingredient}
                                draggable
                                onDragStart={(event) => handleDragStart(event, ingredient)}
                            >
                                {ingredient}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Pantry Ingredients</h3>
                    <div className="ingredient-list">
                        {pantryIngredients.map((ingredient) => (
                            <button
                                key={ingredient}
                                draggable
                                onDragStart={(event) => handleDragStart(event, ingredient)}
                                className={isIngredientRequired(ingredient) ? "required" : ""}
                            >
                                {ingredient}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="drop-zone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: "2px dashed #ccc",
                    padding: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                    minHeight: "100px",
                }}
            >
                <h3>Selected Ingredients</h3>
                {selectedIngredients.length === 0 ? (
                    <p>Drag ingredients here to add to your order.</p>
                ) : (
                    <ul>
                        {selectedIngredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={onBack}>Back</button>
        </div>
    );
};

export default MakeOrder;
