import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import { View, StyleSheet, Text, Button, TextInput, Image } from 'react-native';

import SubTitulo from './Components/SubTitulo';
import Botao from './Components/Botao';
import Avancar from './Components/avancar';
import SaldoProvider from './context/ContaContext';
import Titulo from './src/Titulo';
import AssetExample from './Components/por-imagem';

const App = () => {
  return (
    <SaldoProvider>
      <Titulo />
      <View style={styles.container}>
        <SubTitulo />
        <Botao Perder />
        <Text style={styles.paragraph}>{'\n'}</Text>
         <Botao Manter />
        <Text style={styles.paragraph}>{'\n'}</Text>
         <Botao Ganhar />
         <Text style={styles.paragraph}>{'\n'}</Text>
         <View style={styles.row}>
         <Image source={require('./assets/MascoteSemFundo.png')}  style={styles.image}/>
         </View>
         <Text style={styles.paragraph}>{'\n'}</Text>
         <Avancar />
      </View>
    </SaldoProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  image:{
    height: 200,
    width: 240,
    alignItems: 'center'
    //height: 200,
    //width: 200,
    //marginLeft:80,
  },
  row:{
    alignItems: 'center'
  }
});

export default App;
