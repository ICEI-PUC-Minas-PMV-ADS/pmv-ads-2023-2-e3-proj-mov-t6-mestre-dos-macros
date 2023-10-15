import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';

const Cadastro = () => {

  return(

    <View style={styles.container}>

      <Text style={styles.titulo}>Cadastre-se abaixo:</Text>

      <SafeAreaView>
      <Text style={styles.dado}>Nome </Text>
      <TextInput
        placeholder='Digite seu Nome'
        style={styles.captura}
      />
      </SafeAreaView>
      
      <SafeAreaView>
      <Text style={styles.dado}>E-mail </Text>
      <TextInput
        placeholder='Digite seu E-mail'
        style={styles.captura}
      />
      </SafeAreaView>
      

      <SafeAreaView>
      <Text style={styles.dado}>Idade </Text>
      <TextInput
        placeholder='Digite sua Idade'
        style={styles.captura}
      />
      </SafeAreaView>
      

      <SafeAreaView>
      <Text style={styles.dado}>Gênero </Text>
      <TextInput
        placeholder='Digite seu Gênero'
        style={styles.captura}
      />
      </SafeAreaView>
      

      <SafeAreaView>
      <Text style={styles.dado}>Peso </Text>
      <TextInput
        placeholder='Digite seu Peso'
        style={styles.captura}
      />
      </SafeAreaView>
      

      <SafeAreaView style={styles.alturaContainer}>
      <Text style={styles.dado}>Altura</Text>
      <TextInput
        placeholder='Digite sua Idade'
        style={styles.captura}
      />
      </SafeAreaView>
      
      
      <Button
        title="Cadastre-se"
        color="#00574b"
      />

      <Text>{' '}</Text>

      <Button
        title="Voltar"
        color="#00574b"
      />
      

    </View>

  )
}

export default Cadastro;


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:5,
  },

  titulo: {
    fontFamily: 'Arial',
    fontWeight: 'bolder',
    marginTop: 35,
    fontSize: 30,
    textAlign:'center',
    color: '#00574b',
  },

  dado: {
    fontFamily: 'Arial',
    marginLeft:20,
    marginTop:15,
    marginBottom:10,
    color:'#00574b',
    fontSize: 18,
  },

  captura: {
    width: 280,
    height: 20,
    borderWidth: 2,
    borderColor: '#00574b',
    borderRadius:10, 
    padding:15,
    marginLeft:15,
    marginBottom: 5,
  },

  alturaContainer: {
    marginBottom:20,
  }

});