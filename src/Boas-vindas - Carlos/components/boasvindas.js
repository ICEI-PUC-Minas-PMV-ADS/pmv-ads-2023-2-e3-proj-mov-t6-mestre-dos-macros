import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

const Boasvindas = () => {

  return(

    <View style={styles.container}>

    <Text style={styles.titulo}>MESTRE DOS MACROS</Text>

    <View style={styles.imagemContainer}>
      <Image
        style={styles.imagem}
        source={require('../assets/copo.png')}
      />
    </View>

    
    <Button
        title="Login"
        color="#00574b"
      />
      
    <Text>{'\n'}</Text>

    <View style={styles.cadastroContainer}>
    <Button
        title="Cadastre-se"
        color="#00574b"
      />
    </View>
    

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'column',
    padding:10,
  },

  titulo: {
    fontFamily: 'Arial',
    fontWeight: 800,
    textAlign: 'center',
    marginTop:40,
    fontSize: 23,
    color: '#00574b',
  },

  imagemContainer: {
    flex:1,
    alignItems:'center',
    margin:50,
  },

  imagem: {
    height:400,
    width: 350,
  },

  cadastroContainer: {
    marginBottom:5,
  }

});

export default Boasvindas;