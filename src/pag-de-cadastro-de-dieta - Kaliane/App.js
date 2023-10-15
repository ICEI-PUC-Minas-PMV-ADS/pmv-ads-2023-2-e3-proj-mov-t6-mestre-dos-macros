import React, { useState } from 'react';
import { View, Text, Picker, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';

const DietaCadastroPage = () => {
  const [atividadesFisicas, setAtividadesFisicas] = useState('Sempre');
  const [consumoCalorico, setConsumoCalorico] = useState('2.000 Kcal');

  const handleAvancarPress = () => {
    // Lógica para avançar
    alert('VAI FICAR MUITO AESTHETIC!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PÁGINA DE CADASTRO DE NOVA DIETA</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>DEFINIÇÃO DE DIETA</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Preencha com a sua rotina!</Text>
          </View>

          <Text style={styles.inputLabel}>Frequência de atividades físicas:</Text>
          <Picker
            selectedValue={atividadesFisicas}
            onValueChange={(itemValue) => setAtividadesFisicas(itemValue)}
          >
            <Picker.Item label="Sempre" value="Sempre" />
            <Picker.Item label="Quase sempre" value="Quase sempre" />
            <Picker.Item label="Quase nunca" value="Quase nunca" />
            <Picker.Item label="Nunca" value="Nunca" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Objetivo de consumo calórico:</Text>
          <Picker
            selectedValue={consumoCalorico}
            onValueChange={(itemValue) => setConsumoCalorico(itemValue)}
          >
            <Picker.Item label="2.000 Kcal" value="2.000 Kcal" />
            <Picker.Item label="2.400 Kcal" value="2.400 Kcal" />
            <Picker.Item label="4.000 Kcal" value="4.000 Kcal" />
            <Picker.Item label="5.000 Kcal" value="5.000 Kcal" />
            <Picker.Item label="Outros" value="Outros" />
          </Picker>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Avançar" onPress={handleAvancarPress} color="#10403B" />
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0.0 * screenWidth,
  },
  headerText: {
    fontSize: 0.05 * screenWidth,
    color: '#00574b',
    fontWeight: 'bold',
  },
  content: {
    flex: 3,
    padding: 0.09 * screenWidth,
  },
  sectionTitleContainer: {
    backgroundColor: 'lightgreen',
    borderRadius: 0.04 * screenWidth,
    padding: 0.04 * screenWidth,
    borderWidth: 1
  },
  sectionTitle: {
    fontSize: 0.07 * screenWidth,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  subTitleContainer: {
    marginTop: 0.09 * screenWidth,
  },
  subTitle: {
    fontSize: 0.06 * screenWidth,
    color: '#00574b',
    textAlign: 'center',
  },
  
  inputContainer: {
    marginTop: 0.12 * screenWidth,
  },

  
  inputLabel: {
    fontSize: 18,
    color: '#00574b',
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DietaCadastroPage;
