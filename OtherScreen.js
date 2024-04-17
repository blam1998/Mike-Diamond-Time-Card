// OtherScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function OtherScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Other Screen!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default OtherScreen;