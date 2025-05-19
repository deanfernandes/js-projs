import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import React from "react";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart-container">
      <h1>Cart:</h1>
      {items.length > 0 ? (
        <>
          <button onClick={() => dispatch({ type: "cart/clearCart" })}>
            Clear cart
          </button>
          <ul>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <li>{`${item.name} £${item.price} x${item.quantity}`}</li>
                <button
                  onClick={() =>
                    dispatch({ type: "cart/removeItem", payload: item.id })
                  }
                >
                  Remove
                </button>
              </React.Fragment>
            ))}
          </ul>
          <p>Total: £{total}</p>
        </>
      ) : (
        <p>Cart empty.</p>
      )}
    </div>
  );
}
