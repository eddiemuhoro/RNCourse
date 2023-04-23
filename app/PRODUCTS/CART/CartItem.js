
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartItem = ({ itemName, quantity, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.itemQuantity}>x {quantity}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.itemPrice}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
  },
  price: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartItem;
