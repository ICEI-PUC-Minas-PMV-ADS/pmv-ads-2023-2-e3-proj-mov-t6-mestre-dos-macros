import React, { useState } from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';

import { useSaldo } from '../context/ContaContext';

const Avancar = (props) => {
  const { saldo, setSaldo } = useSaldo();
  const [valor, setValor] = useState(0);

  return (
    <>

      <Button
        title='Avançar'
        color='#03A688'
        onPress={() => {
        }}
      />
    </>
  );
};


export default Avancar;
