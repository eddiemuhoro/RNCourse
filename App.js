import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('https://usella.up.railway.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((response) => response.json())
      .then((json) => {
        // Handle the response from the API here
        Alert.alert('Login Successful');
        console.log(json);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        {/* emasil */}
        <TextInput style={styles.textInput} placeholder="Enter your username"
          value={username}
          onChangeText={setUsername} />
        {/* password */}
        <TextInput style={styles.textInput} placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} />
        {/* register */}
        <View style={styles.buttons}>
          <Button title="Login" onPress={handleLogin} />
        </View>

      </View>

      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,

    width: '100%',

  },
  inputContainer: {
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    width: '80%',
  }

});
