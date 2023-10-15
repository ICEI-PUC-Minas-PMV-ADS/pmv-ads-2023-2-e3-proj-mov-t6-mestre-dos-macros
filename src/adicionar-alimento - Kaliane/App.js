import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // Ação a ser executada quando o botão for pressionado (voltar)
          }}
        >
        <Text style={styles.paragraph}>{'\n\n\n\n\n'}</Text>
          <Icon name="arrow-left" size={5 * vw} color="green" />
          <Text style={styles.backButtonText}> VOLTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.square}>
          <Text style={styles.title}>OPÇÃO A</Text>
          <Text style={styles.word}>BANANA</Text>
          <Text style={styles.infoText}>
            <Text style={styles.nutritionalInfoText}>Informações nutricionais</Text>
          </Text>
          <View style={styles.nutritionalInfo}>
            <Text style={styles.nutritionalInfoText}>Calorias: 350</Text>
            <Text style={styles.nutritionalInfoText}>Proteína: 20g</Text>
            <Text style={styles.nutritionalInfoText}>Carboidratos: 30g</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Ação a ser executada quando o botão for pressionado
          }}
        >
          <Text style={styles.buttonText}>
            Selecionar e adicionar mais alimentos em refeição!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Ação a ser executada quando o botão for pressionado
          }}
        >
          <Text style={styles.buttonText}>
            Cálculo de Macros
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Cor de fundo
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2 * vw,
    paddingTop: 2 * vh,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#00574b', // Cor branca
    fontSize: 5 * vw, // Tamanho da fonte relativo à largura da tela
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'lightgreen',
    padding: 5 * vw,
    borderRadius: 2 * vw,
    alignItems: 'center',
    borderWidth: 1
  },
  title: {
    fontSize: 6 * vw, // Tamanho da fonte relativo à largura da tela
    fontWeight: 'bold',
  },
  word: {
    color: 'white', // Cor branca
    fontWeight: 'bold',
    fontSize: 8 * vw, // Tamanho da fonte relativo à largura da tela
  },
  infoText: {
    marginTop: 2 * vh,
    fontSize: 3 * vw, // Tamanho da fonte relativo à largura da tela
  },
  nutritionalInfo: {
    marginTop: 2 * vh,
    alignItems: 'center',
  },
  nutritionalInfoText: {
    color: 'white', // Cor branca
    fontWeight: 'bold', // Negrito
    fontSize: 4 * vw, // Tamanho da fonte relativo à largura da tela
  },
  footer: {
    padding: 2 * vh,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#10403B',
    borderRadius: 2 * vw,
    padding: 2 * vw,
    marginBottom: 10, // Espaçamento inferior entre os botões
    
  },
  buttonText: {
    color: 'white', // Cor branca
    fontWeight: 'bold',
    fontSize: 5 * vw, // Tamanho da fonte relativo à largura da tela
    textAlign: 'center',
  },
});

export default App;
