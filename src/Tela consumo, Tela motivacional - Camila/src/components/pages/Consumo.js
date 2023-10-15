import {ImageBackground, StyleSheet, Text, View, Button, SafeAreaView, Alert} from 'react-native';

const image = {uri: 'https://images.app.goo.gl/CD2LjGSRte7hcmCC7'};
const Separator = () => <View style={styles.separator} />;

const Consumo = () => (


  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
      <Text style={styles.text}> Seu consumo de hoje: 
      </Text>
      <Text style={styles.text}> Calorias: 500 gramas, água 1,5L </Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 27,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00c060',
    
    
  },
});
 
 <View>
      
      <Button
        title="Metas"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>



export default Consumo;