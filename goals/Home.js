import React, { useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const Home = () => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    const goalInputHandler = (enteredText) => {{
        setEnteredGoal(enteredText)
    } }

    const addGoalHandler = () => {{
        console.log(enteredGoal)
        setCourseGoals(currentGoals => [...currentGoals, {
            id: Math.random().toString(),
            text: enteredGoal
        }])
    }}

    const handleDelete = (goal) => {
        setCourseGoals(currentGoals => currentGoals.filter((item) => item !== goal))
    }
    //text does not support rounded corners in ios
    //child element cannot inherit parents style
    //styling a view does not affect the text inside it
    //scrollview not good for long list of items
    //scrollview renders all items at once bringing performance issues
    //flatlist renders items as you scroll
    //we dont have children in flatlist
    //flatlist has a prop , renderItem which takes a function that return jsx for each item
  return (
   <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='add goal' onChangeText={goalInputHandler} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>

        <View style={styles.goalsContainer}>
      

        <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem = {data => {
                return (
                    <View style={styles.goalItem}>
                        <Text style={styles.goalText}>{data.item.text}</Text>
                    </View>
                )
            }}
         />
        </View>
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: '1',
        padding: 20,
        width: '100%',
    },
    inputContainer: {
        flex:'1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',

    },
    textInput: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        padding: 10
    },
    goalsContainer: {
        flex:'6'
    },
    goalItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
    },
    goalText: {
        color: 'white',
        fontSize: 20
    }
    
})