import React from 'react';
import { View } from 'react-native';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = [
    { itemName: 'Item 1', quantity: 2, price: 10.99 },
    { itemName: 'Item 2', quantity: 1, price: 5.99 },
  ];

  return (
    <View>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          itemName={item.itemName}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </View>
  );
};

export default Cart;
