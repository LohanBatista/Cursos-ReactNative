import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Cerveja from '../../assets/images/cerveja.png';

const Contador = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Sua taxa de alcool é:</Text>
      </View>
      <View style={styles.containerAlcool}>
        <Text style={styles.alcool}>1.00%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 40,
    marginTop: -5,
  },
  text: {
    paddingVertical: 20,
    color: '#333131',
    fontSize: 40,
  },
  containerAlcool: {alignItems: 'center'},
  alcool: {
    color: '#333131',
    fontSize: 80,
    paddingVertical: 50,
    paddingLeft: 90,
  },
  image: {
    height: 30,
  },
});

export default Contador;
