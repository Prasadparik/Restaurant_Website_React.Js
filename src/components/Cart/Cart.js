import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import AddAmountForm from "../UI/AddAmountForm";

function Cart({ cartToggle }) {
  const cartCtx = useContext(CartContext);
  const MealList = cartCtx.items.map((item, i) => (
    <ul className={classes.cartList}>
      <li>
        <b>{item.name}</b> <br />
        <i>{item.description}</i> <br />
        <i> Price: $ {item.price}</i> <br />
      </li>
      <li>
        <AddAmountForm
          FoodList={cartCtx.items}
          setFoodList={cartCtx.menu}
          item={item}
          i={i}
        />
      </li>
    </ul>
  ));

  useEffect(() => {}, [cartToggle]);

  return (
    <Modal>
      {MealList}
      {cartCtx.items.length < 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
            Your Cart is Empty!
          </h1>

          <button
            style={{
              textAlign: "center",
              padding: "0.5rem 1rem",
              background: "#fb872b",
              border: "none",
            }}
            onClick={cartToggle}
          >
            Close
          </button>
        </div>
      ) : (
        <div className={classes.TotalWrapper}>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>$ {cartCtx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={cartToggle}>
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default Cart;
