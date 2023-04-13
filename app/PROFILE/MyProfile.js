import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MyProfile = () =>{

    

    return(
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

        {/* tabs for my profile screen including my posts, my followers, my following */}
        <View style={styles.profileTabs}>
            <View>
                <Text>My Posts</Text>
            </View>

            <View>
                <Text>My Followers</Text>
            </View>

            <View>
                <Text>My Following</Text>
            </View>
                 
        </View>

        </View>
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
        }

})


export default MyProfile;