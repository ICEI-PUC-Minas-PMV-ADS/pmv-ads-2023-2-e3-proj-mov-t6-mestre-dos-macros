import React, { useState } from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';

import { useSaldo } from '../context/ContaContext';

const Botao = (props) => {
  const { saldo, setSaldo } = useSaldo();
  const [valor, setValor] = useState(0);

  return (
    <>

      <Button
        title={props.Perder ? 'Ganhar Peso' : props.Manter ? 'Manter Peso' : 'Perder Peso'}
        color='#10403B'
        onPress={() => {
        }}
      />
    </>
  );
};


export default Botao;
