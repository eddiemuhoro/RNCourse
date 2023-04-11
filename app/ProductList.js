import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProductList = () => {
  const [products, setProducts] = useState([]);
    const navigation = useNavigation();

  useEffect(() => {
    fetch('https://usella.up.railway.app/product')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 
  const renderItem = ({ item, index }) => {
    const { width } = Dimensions.get('window');
    const itemWidth = (width - 40) / 2;
    const isFirstItem = index % 2 === 0;
    const itemStyle = [
      styles.productContainer,
      { width: itemWidth, marginLeft: isFirstItem ? 0 : 20 },
    ];

    return (
        <TouchableOpacity
        style={[styles.productContainer, { width: itemWidth }]}
        onPress={() => {
          navigation.navigate('ProductDetails', { productId: item.id });
        }}
      >
        <Image source={{ uri: item.images[0] }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        // horizontal={true}
        // showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  listContainer: {
    display:'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: 10,

  },
  productContainer: {
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#999',
  },
});

export default ProductList;
