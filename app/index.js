import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#b1afb0',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, it is your new App from index!!!</Text>
  </View>
);

export default App;
