import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        ESQUECEU A SENHA?
      </Text>
      
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Digite o email cadastrado no campo abaixo, e em seguida clique em RECUPERAR
      </Text>
      <Separator />
      <TextInput
        style={styles.input}
        textContentType={'emailAddress'}
        placeholder="Email cadastrado"
      />
      <Separator />
      <Button
        title="Recuperar"
        color="BLACK"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;