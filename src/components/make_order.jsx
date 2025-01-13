import React from "react";
const MakeOrder = ({onBack}) => {
    return (
        <div className="make-order">
            <h2>Make Order</h2>
            <div className="order-buttons">
            <button>Sugar</button>
            <button>Milk</button>
            <button>Hot Water</button>
            <button>Coffee Powder</button>
            <button onClick={onBack}>Back</button>
            </div>
        </div>

    );
};

export default MakeOrder;