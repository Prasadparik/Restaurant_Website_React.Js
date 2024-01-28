import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setitems] = useState([]);
  const [totalAmount, settotalAmount] = useState(0);
  const [menu, setMenu] = useState([
    {
      id: 1,
      amount: 0,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      amount: 0,
      name: "Chicken Parmesan",
      description: "Succulent chicken with marinara and cheese",
      price: 16.99,
    },
    {
      id: 3,
      amount: 0,
      name: "Vegetarian Pasta",
      description: "Fresh vegetables tossed in garlic and olive oil",
      price: 12.49,
    },
    {
      id: 4,
      amount: 0,
      name: "Steak with Mushroom Sauce",
      description: "Juicy steak topped with savory mushroom sauce",
      price: 24.99,
    },
    {
      id: 5,
      amount: 0,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 8.99,
    },
    {
      id: 6,
      amount: 0,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomatoes and mozzarella",
      price: 14.99,
    },
    {
      id: 7,
      amount: 0,
      name: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a gooey center",
      price: 7.99,
    },
    {
      id: 8,
      amount: 0,
      name: "Mango Tango Smoothie",
      description: "Refreshing mango and pineapple smoothie",
      price: 5.99,
    },
  ]);

  const addItemToCartHandler = (newItem) => {
    const updatedItems = [...items];
    const updatedMenu = [...menu];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );
    const existingMenuIndex = updatedMenu.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount += 1;
      settotalAmount(totalAmount + updatedItems[existingItemIndex].price);
    } else {
      // Item doesn't exist in the cart
      updatedItems.push({ ...newItem, amount: 1 });
      settotalAmount(totalAmount + newItem.price);
    }

    updatedMenu[existingMenuIndex].amount += 1;

    setitems(updatedItems);
    setMenu(updatedMenu);

    const updatedTotalAmount = updatedItems.reduce(
      (accum, item) => accum + item.price * item.amount,
      0
    );
    settotalAmount(updatedTotalAmount);
  };

  const removeItemToCartHandler = (newItem) => {
    const updatedItems = [...items];
    const updatedMenu = [...menu];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );
    const existingMenuIndex = updatedMenu.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount -= 1;
      settotalAmount(totalAmount - updatedItems[existingItemIndex].price);
    }

    updatedMenu[existingMenuIndex].amount -= 1;

    const filteredItems = updatedItems.filter((item) => item.amount !== 0);
    console.log("Filter::", filteredItems);

    setitems(filteredItems);
    setMenu(updatedMenu);
  };

  const cartContext = {
    menu: menu,
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
