import React, { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";

import "./assets/Headers.css";

const CartLink = () => {

    const [cartNumber, setCartNumber] = useState(0);
    
    return (
        <div className="admin-link">
            <a
                // key={index}
                // href={element.link}
                className="admin-link-element"
            >
                <FiShoppingBag />
                {cartNumber}
            </a>
        </div>
    );
}

export default CartLink;