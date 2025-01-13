import React from "react";
const MakeOrder = ({onBack}) => {
    return (
        <div className="make-order-screen">
            <h1>Make Your Order</h1>
            <button>Sugar</button>
            <button>Milk</button>
            <button>Hot Water</button>
            <button>Coffee Powder</button>
            <button onClick={onBack}>Back</button>
        </div>
    );
};

export default MakeOrder;