import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import ProductList from "../PRODUCTS/ProductList";

const MyProfile = () =>{

    const [orders, setOrders] = useState(false)
   
    const [wishlist, setWishlist] = useState(false)
    const [posts, setPosts] = useState(true)


    const handleOrders = () => {
        setOrders(true)
        setWishlist(false)
        setPosts(false)
   
    }

 

    const handleWishList = () => {
        setOrders(false)
        setWishlist(true)
        setPosts(false)
    }

    const handlePosts = () => {
        setOrders(false)
        setWishlist(false)
        setPosts(true)
    }

    console.log(posts, orders, wishlist)


    return(
        <FlatList
       // your key extractor function
        ListHeaderComponent={
          <View>
            <View style={styles.profileContainer}>
              <Image 
                style={styles.profileImage}
                source={{uri : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'}}
              />
              <View>
                <Text style={styles.profileName}>Edwin Mwangi</Text>
                <Text>eddiemuhoro@gmail.com</Text>
                <Text>0705947364</Text>
                <Text>followers: 1</Text>
              </View>
            </View>
            
            <View style={styles.profileTabs}>
              <TouchableOpacity style={posts ? styles.activeButton : styles.button} onPress={handlePosts}>
                <Text style={styles.buttonText}>My Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={orders ? styles.activeButton : styles.button} onPress={handleOrders} >
                <Text style={styles.buttonText}>My Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity style={wishlist ? styles.activeButton : styles.button} onPress={handleWishList}>
                <Text style={styles.buttonText}>My Wishlist</Text>
              </TouchableOpacity>
            </View>


            {
                posts ? <ProductList /> : null
            }
            {
                orders ? <Text>No Orders yet</Text> : null
            }
            {
                wishlist ? <Text>No Wishlist yet</Text> : null
            }
          

          </View>
        }
        ListFooterComponent={null}
        contentContainerStyle={{flexGrow: 1}}
        style={{height:'100%'}}
      />
      
    )
}


const styles = StyleSheet.create({
    profileContainer: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    profileDetails: {
        flexDirection:'column'

    },
    profileImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginRight: 20,
        //set the border radius here to make the rounded border
        borderRadius: 75,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
      },
      profileTabs: {
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginVertical: 10,
            marginHorizontal: 20,
        },
        button: {
            backgroundColor: 'treansparent',
            padding: 10,
            borderRadius: 5,
          
           
            marginVertical: 10,
          },
          buttonText: {
            color: 'gray',
            fontSize: 16,
            fontWeight: 'bold',
          },
          activeButton : {
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
            
          }

})


export default MyProfile;