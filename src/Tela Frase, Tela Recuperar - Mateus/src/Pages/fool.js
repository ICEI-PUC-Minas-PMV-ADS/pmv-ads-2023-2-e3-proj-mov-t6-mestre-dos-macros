import { Text, View, StyleSheet } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Recuperar senha
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
