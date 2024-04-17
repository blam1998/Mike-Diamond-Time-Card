// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <View>
        <Text style = {styles.title}>Mike Diamond Services</Text>
        <Button title="Go to Other Screen" onPress={() => navigation.navigate('Other')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#41f53d',
    padding: 10,
    paddingTop: 75,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centered: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  }
})
export default HomeScreen;