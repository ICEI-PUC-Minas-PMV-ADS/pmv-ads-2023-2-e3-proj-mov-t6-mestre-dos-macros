import React from 'react'
import {View, StyleSheet, Button, Text} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> SEU FOCO DETERMINA SUA REALIDADE </Text>
      <Separator />
      <Button
        title="BORA!!"
        color="BLACK"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Separator />
    </View>
  );

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:'green'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text:{
    fontSize: 30
    
  
  }
})
export default App;