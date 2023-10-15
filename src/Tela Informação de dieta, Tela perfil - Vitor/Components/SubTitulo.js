import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useSaldo } from '../context/ContaContext';

const SubTitulo = (props) => {
  const { saldo } = useSaldo();

  return <Text style={styles.text}>NECESSIDADE DO USUÁRIO </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,

    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#00574b',
    margin: 20,
  },
});

export default SubTitulo;
