import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://usella.up.railway.app/product/category/ELECTRONICS')
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
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
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
    // flexWrap: 'wrap',
    marginHorizontal: -5,
    minHeight: Dimensions.get('window').height + 100,
  },
  productItem: {
    width: '50%',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
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

export default RelatedProducts;
