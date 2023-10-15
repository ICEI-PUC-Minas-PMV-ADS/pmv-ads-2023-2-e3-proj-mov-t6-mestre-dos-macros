import React from 'react';
import {View, Text, StyleSheet} from  'react-native';

const Titulo = () => {

  return (
      <Text style = {styles.text}> PÁGINA PARA CADASTRO DE NOVA DIETA </Text>
  );

}

const styles = StyleSheet.create({
  text: {
   fontSize: 15,
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    fontWeight: 'bold',
    borderWidth: 2
  },
});

export default Titulo;