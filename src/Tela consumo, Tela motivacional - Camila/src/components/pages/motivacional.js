import {ImageBackground, StyleSheet, Text, View, Button, SafeAreaView, Alert} from 'react-native';

const image = {uri: './assets/snack-icon.png'};
const Separator = () => <View style={styles.separator} />;



const Motivacional = () => {
  return (

<>

  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <Text style={styles.text}>Sua saúde é importante! 
      </Text>
      <Text style={styles.text}> Mantenha-se saudável e ativo.</Text>
    </ImageBackground>
  </View>

  <View>
          <Button
        title="Home" 
        onPress={() => Alert.alert('Simple Button pressed') }
      
      />
    </View> 
    </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  image: {
    flex: 2,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 49,
    lineHeight: 190,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00574b',
    flexDirection: 'row'
  },
});
 
 



export default Motivacional;
