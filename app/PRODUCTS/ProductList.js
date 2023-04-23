import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://usella.fly.dev/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  if(!products) {
    return (
      <View style={styles.container}>

        <Text>Loading...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (

    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
    >
      <Image 
        source={{ uri: item.images[0] }}
        style={styles.productImage}
      />
      <View style={styles.productDetails} >
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Ksh {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.listContainer}>
      <FlatList showsVerticalScrollIndicator={false} 
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  productItem: {
    width: '50%',
    marginHorizontal: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  productDetails: {
    padding: 10,
    width: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'grey',
  },
});

export default ProductList;
