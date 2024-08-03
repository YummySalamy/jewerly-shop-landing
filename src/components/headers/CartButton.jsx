import React, { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";

import "./assets/Headers.css";

const CartButton = () => {

    const [cartNumber, setCartNumber] = useState(0);
    
    return (
        <div className="cart-button">
            <a
                // key={index}
                // href={element.link}
                className="cart-button-element"
            >
                <FiShoppingBag />
                {cartNumber}
            </a>
        </div>
    );
}

export default CartButton;