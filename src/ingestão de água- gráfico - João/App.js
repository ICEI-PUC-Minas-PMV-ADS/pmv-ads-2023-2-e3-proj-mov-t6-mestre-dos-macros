import { Text, SafeAreaView, StyleSheet, Button, Image, View } from 'react-native';
import water from '/assets/water.png';
import { useState } from "react";
import { Card } from 'react-native-paper';

export default function App() {


  const today = 3

  const week = 21



  const changeColor = () => {
          setMainText(mainText + '!')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.ImageContainer}>
        <View style={styles.ImageBox}>
          <Image
            style={styles.ImageWater}
            source={require('/assets/water.png')}
          />
        </View>
        <Text style={styles.paragraph}>water</Text>
      </Card>
      <View style={styles.SimpleContainer}>
        <View style={styles.SimpleBox}>
          <Text style={styles.paragraph}> {today} diário </Text>
        </View>
        <View style={styles.SimpleBox}>
          <Text style={styles.paragraph}> {week} semanal </Text>
        </View>
      </View>
      <View style={styles.ChartContainer}>
          <View style={{width: 35, height: 170, backgroundColor: 'black', marginLeft: 5}}></View>
          <View style={{width: 35, height: 150, backgroundColor: 'red', marginLeft: 5}}></View>
          <View style={{width: 35, height: 100, backgroundColor: 'blue', marginLeft: 5}}></View>
          <View style={{width: 35, height: 180, backgroundColor: 'orange', marginLeft: 5}}></View>
          <View style={{width: 35, height: 200, backgroundColor: 'grey', marginLeft: 5}}></View>
          <View style={{width: 35, height: 120, backgroundColor: 'pink', marginLeft: 5}}></View>
          <View style={{width: 35, height: 200, backgroundColor: 'green', marginLeft: 5}}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  ImageContainer: {
    width: 100,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 85,
  },

  ImageWater: {
    width: 45,
    height: 45,
    borderRadius: 50
  },

  ImageBox: {
    marginTop: 15,
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 50,
    borderColor: 'red'
  },

  SimpleBox: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 1,
    height: 50,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 5,
  },

  SimpleContainer: {
    flex:1,
    flexDirection:'row',
  },

  ChartContainer: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 85,
    marginLeft: 215,
    transform: [{rotate: '180deg'}]
  },
});
