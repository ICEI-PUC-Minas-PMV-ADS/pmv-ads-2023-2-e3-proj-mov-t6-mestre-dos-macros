import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';

const Login = () => {

  const [text, usuario] = React.useState('Digite seu Usuário');
  const [number, senha] = React.useState('Digite sua Senha');

  return(

    <View style={styles.container}>

      <Text style={styles.titulo}>Mestre dos Macros </Text>

      
      <SafeAreaView>
      <Text style={styles.dado}>Nome </Text>
      <TextInput
        onChangeText={usuario}
        value={text}
        style={styles.resposta}
      />
      </SafeAreaView>

      <SafeAreaView>
      <Text style={styles.dado}>Nome do Usuário </Text>
      <TextInput
        onChangeText={senha}
        value={number}
        style={styles.resposta}
      />
      </SafeAreaView>
      
      <View style={styles.botaoContainer}>
      <Button
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="#00574b"
      />
      </View>
      
      <View style={styles.linkContainer}>
      <Text style={styles.link}>Não possui conta?
      <Text href='#' style={styles.link}>Cadastre-se</Text>
      </Text>
      
      <Text href='#' style={styles.link}>Esqueci minha senha</Text>
      </View>

    </View>

  )
};

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding:15,
  },

  titulo: {
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 27,
    margin: 40,
    color:'#00574b',
  },

  dado: {
    fontFamily: 'Arial',
    fontSize: 22,
    marginTop: 25,
    marginBottom: 15,
    marginLeft:10,
    color:'#00574b',
  },

  resposta: {
    borderWidth:2,
    borderColor: '#00574b',
    borderRadius: 10,
    height:30,
    width:280,
    marginBottom:20,
    marginLeft:5,
  },


  link: {
    fontFamily: 'Arial',
    textDecoration: 'none',
    color:'#00574b',
    margin: 10,
    cursor: 'pointer',
  },

  linkContainer: {

    flex:1,
    margin:10,

  },

  botaoContainer: {
    width:150,
    marginLeft:10,
    marginTop:10,
    marginBottom:50,
  }


});



