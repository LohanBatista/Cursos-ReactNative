import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Sacola from '../sacola/sacola';

const Cabecalho = () => {
  return (
    <>
      {/* <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="contain" > */}
      <View style={styles.container}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Alcooltopia</Text>
          <Sacola />
        </View>
      </View>
      {/* </ImageBackground> */}
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  titulo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default Cabecalho;
